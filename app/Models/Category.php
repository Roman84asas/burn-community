<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    /**
     * @var string
     */
    protected $table = 'categories';

    /**
     * @var string[]
     */
    protected $fillable = [
        'id',
        'name',
        'slug',
    ];


    /**
     * @return BelongsTo
     */
    public function topcategory(): BelongsTo
    {
        return $this->BelongsTo(Topcategory::class);
    }

    /**
     * @return hasMany
     */
    public function subcategory(): hasMany
    {
        return $this->hasMany(Subcategory::class );
    }
}
