<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    private UserPasswordEncoderInterface $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $rawPassword = '123123123';

        $user = new User();
        $user->setName('Administrator')
            ->setEmail('ilya@zobenko.ru')
            ->setPassword($this->encoder->encodePassword($user, $rawPassword))
            ->setRoles(array('ROLE_ADMIN', 'ROLE_USER'));

        $manager->persist($user);
        $manager->flush();
    }
}
