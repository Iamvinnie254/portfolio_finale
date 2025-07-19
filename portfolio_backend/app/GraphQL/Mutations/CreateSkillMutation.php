<?php

namespace App\Graphql\Mutations;

use App\Models\Skill;
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Support\Facades\Hash;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;
use Nuwave\Lighthouse\Support\Contracts\GraphQLMutation;


class CreateSkillMutation
{
    public function createSkill($root, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)

    {
        $iconPath = null;

        if (isset($args['icon'])) {
            $iconPath = $args['icon']->store('uploads/skills_icons', 'public');
        }

        $skill = Skill::create([
            'skill_name' => $args['skill_name'],
            'image' => $iconPath ? '/storage/' . $iconPath : null,
        ]);
        return [
            'skill' => $skill,
            'message' => 'Skill updated successfully',
        ];
    }
}
