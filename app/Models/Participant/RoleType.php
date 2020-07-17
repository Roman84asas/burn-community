<?php

declare(strict_types=1);

namespace App\Models\Participant;

use CommerceGuys\Enum\AbstractEnum;

class RoleType extends AbstractEnum
{
    public const ADMIN        = 'admin';
    public const SUPER_ADMIN  = 'super_admin';
    public const MODERATOR    = 'moderator';
    public const MEMBER_BTWOB = 'member_btwob';
    public const MEMBER       = 'member';
    public const GUEST        = 'guest';
}
