<?php

namespace App\Http\Controllers;

use App\Http\Resources\TopicCollection;
use App\Models\Tag;
use App\Models\Topic;
use App\Repositories\GetTooIdInTag;
use Illuminate\Http\Request;

class TopicController extends Controller
{


    public function index()
    {
        return [
            'topicLatest' => Topic::latestPublished()->paginate(5),
        ];
    }

    public function indexForTag($id)
    {
       return [
        'topicLatest' => Tag::topicFromTagPublished($id),
        ];
    }

}
