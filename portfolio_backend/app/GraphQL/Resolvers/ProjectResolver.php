<?php

namespace App\Graphql\Resolvers;

use App\Models\Project;

class ProjectResolver
{
    public function imageUrl(Project $project): ?string
    {
        return $project->project_preview_image
            ? asset('storage/' . $project->project_preview_image)
            : null;
    }
}
