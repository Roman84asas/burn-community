<?php


namespace App\Http\Controllers;
use App\Models\Tag;
use App\Repositories\GetTooIdInTag;
use Illuminate\Http\Request;


class TagController extends Controller
{

    /**
     * @var GetTooIdInTag
     */
    //protected $getTooIdInTag;

    /*public function __construct(GetTooIdInTag $getTooIdInTag)
    {

        $this->getTooIdInTag = $getTooIdInTag;
    }*/

    public function index()
    {

        return [
            'tags' => GetTooIdInTag::GetTag(),
            //'topicLatest' => Tag::tooPopular()->paginate(5),
        ];
    }

    public function indexForTag($id)
    {
        return $id;
    }

}
