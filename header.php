<!doctype html>
<html lang="en" class="no-js">
    <head>
        <meta charset="utf-8">
        <title>
            <? page_title(); ?>
      	</title>
        <meta name="description" content="<? if ( $site_description ) echo "$site_description"; ?>">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="<?= get_template_directory_uri(); ?>/assets/css/blinkdesign.css">
    </head>
    <body class="<? body_class(); ?>">

        <!--[if lt IE 8]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <nav class="visuallyhidden">
            <ul>
                <li><a href="#content">Skip to content</a></li>
                <li><a href="#nav">Skip to nav</a></li>
            </ul>
        </nav>

        <div class="container">

            <header role="banner" class="header">
                <a class="logo" href="<?= home_url(); ?>">
                    <h1 class="logo-title">Simon Smith</h1>
                    <p class="logo-description">Front-end developer</p>
                </a>

                <nav class="nav" id="nav" role="navigation">
                    <h1 class="visuallyhidden">Site navigation</h1>
                    <?
                        wp_nav_menu([
                            'theme_location' => 'main-nav',
                            'container' => false,
                            'menu_class' => 'nav-list',
                            'menu_id' => false
                        ]);
                    ?>
                </nav>
            </header>

            <div class="content" id="content" role="main">
