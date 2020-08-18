<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Subcategory extends Model
{
    /**
     * @var string
     */
    protected $table = 'subcategories';

    /**
     * @var string[]
     */
    protected $fillable = [
        'id',
        'name',
    ];


    /**
     * @return BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->BelongsTo(Category::class);
    }

    /**
     * @return hasMany
     */
    public function subcategory(): hasMany
    {
        return $this->hasMany(Topic::class );
    }
}
