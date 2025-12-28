const level1 = new Level(
    [
        new Chicken(200, 400),
        new Chicken(300, 400),
        new Chicken(400, 400),
        new Chicken(800, 400),
        new Chicken(900, 400),
        new Chicken(1000, 400),
        new Chicken(1400, 400),
        new Chicken(1500, 400),
        new Chicken(1600, 400),
        new Chicken(1800, 400),
        new Chicken(1900, 400),
        new Chicken(2000, 400),
        new Chicken(2200, 400),
        new Chicken(2300, 400),
        new Chicken(2400, 400),
        new Endboss()
    ],
    [
        new Cloud('../assets/img/5_background/layers/4_clouds/1.png'),
        new Cloud('../assets/img/5_background/layers/4_clouds/2.png', 350)
    ],
    [
        new BackgroundObject('../assets/img/5_background/layers/air.png'),
        new BackgroundObject('../assets/img/5_background/layers/3_third_layer/1.png'),
        new BackgroundObject('../assets/img/5_background/layers/2_second_layer/1.png'),
        new BackgroundObject('../assets/img/5_background/layers/1_first_layer/1.png'),
        new BackgroundObject('../assets/img/5_background/layers/air.png', 719),
        new BackgroundObject('../assets/img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('../assets/img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('../assets/img/5_background/layers/1_first_layer/2.png', 719),
        new BackgroundObject('../assets/img/5_background/layers/air.png', 2 * 719),
        new BackgroundObject('../assets/img/5_background/layers/3_third_layer/1.png', 2 * 719),
        new BackgroundObject('../assets/img/5_background/layers/2_second_layer/1.png', 2 * 719),
        new BackgroundObject('../assets/img/5_background/layers/1_first_layer/1.png', 2 * 719),
        new BackgroundObject('../assets/img/5_background/layers/air.png', 3 * 719),
        new BackgroundObject('../assets/img/5_background/layers/3_third_layer/2.png', 3 * 719),
        new BackgroundObject('../assets/img/5_background/layers/2_second_layer/2.png', 3 * 719),
        new BackgroundObject('../assets/img/5_background/layers/1_first_layer/2.png', 3 * 719),
        new BackgroundObject('../assets/img/5_background/layers/air.png', 4 * 719),
        new BackgroundObject('../assets/img/5_background/layers/3_third_layer/1.png', 4 * 719),
        new BackgroundObject('../assets/img/5_background/layers/2_second_layer/1.png', 4 * 719),
        new BackgroundObject('../assets/img/5_background/layers/1_first_layer/1.png', 4 * 719)
    ],
    [
        new Coin(400, 140),
        new Coin(450, 130),
        new Coin(450, 160),
        new Coin(500, 120),
        new Coin(500, 170),
        new Coin(550, 110),
        new Coin(550, 180),
        new Coin(600, 120),
        new Coin(600, 170),
        new Coin(650, 130),
        new Coin(650, 160),
        new Coin(700, 140),
        new Coin(1300, 220),
        new Coin(1350, 180),
        new Coin(1400, 140),
        new Coin(1450, 100),
        new Coin(1500, 60),
        new Coin(1500, 220),
        new Coin(1450, 180),
        new Coin(1350, 100),
        new Coin(1300, 60)
    ],
    [
        new Bottle(500, 0),
        new Bottle(800, 1),
        new Bottle(1200, 1),
        new Bottle(1500, 0),
        new Bottle(1800, 1)
    ]


);
