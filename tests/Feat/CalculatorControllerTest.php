<?php

namespace App\Tests\Feat;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Class CalculatorControllerTest
 * @package App\Tests\Feat
 */
class CalculatorControllerTest extends WebTestCase
{
    public function testLoadingCalculatorPage()
    {
        $client = static::createClient();

        $client->request('GET', '/calculate');

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }
}
