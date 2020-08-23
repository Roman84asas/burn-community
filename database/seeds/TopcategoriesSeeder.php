<?php


use App\Models\Topcategory;
use Faker\Factory;
use Illuminate\Database\Seeder;

class TopcategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $faker;

    public function __construct()
    {
        $this->faker = Factory::create('ru_RU');
    }

    public function run()
    {
        \DB::table('topcategories')->truncate();

        Topcategory::create([

        ]);
    }
}
