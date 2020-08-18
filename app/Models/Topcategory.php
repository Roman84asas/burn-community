<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Topcategory extends Model
{

    /**
     * @var string
     */
    protected $table = 'topcategories';

    /**
     * @var string[]
     */
    protected $fillable = [
        'id',
        'name',
    ];


    /**
     * @return hasMany
     */
    public function category(): hasMany
    {
        return $this->hasMany(Category::class );
    }
}
