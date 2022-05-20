<?php namespace ProcessWire;

$base=$config->urls->templates;
$home=$pages->get(1);
$contact=$pages->get(1020);
$services=$pages->get(1060);
$projects=$pages->get(1048);
$seo_tools=$pages->get(1123);

$p_title=($page->seo_title) ? $page->seo_title : $page->title;
$title=($page->id==1) ? $p_title : $p_title.' | '.$home->seo_title;
$share_image='https://'.$_SERVER['SERVER_NAME'].$seo_tools->image->url;
$full_url='https://'.$_SERVER['SERVER_NAME'].$page->url;

$_contact=new Contact();
$_career=new Career();
$_form=new Form();

if($input->post->action=='file_upload') $_form->upload_file('file');
if($input->post->action=='contact') $_contact->send();
if($input->post->action=='career') $_career->send();


global $_months;
$_months = [
    '01' => _x('Yanvar','-'),
    '02' => _x('Fevral','-'),
    '03' => _x('Mart','-'),
    '04' => _x('Aprel','-'),
    '05' => _x('May','-'),
    '06' => _x('İyun','-'),
    '07' => _x('İyul','-'),
    '08' => _x('Avqust','-'),
    '09' => _x('Sentyabr','-'),
    '10' => _x('Oktyabr','-'),
    '11' => _x('Noyabr','-'),
    '12' => _x('Dekabr','-')
];

?>

<!DOCTYPE html>
<html lang="<?= strtolower($user->language->title); ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title; ?></title>
    <meta name="description" content="<?= $page->seo_description; ?>">
    <meta name="keywords" content="<?= $page->seo_keywords; ?>" />
    <meta name="image" content="<?= $share_image; ?>" />
    <meta property="og:title" content="<?= $title; ?>" />
    <meta property="og:url" content="<?= $full_url; ?>" />
    <meta property="og:description" content="<?= $page->seo_description; ?>" />
    <meta property="og:type" content="website"/>
    <meta property="og:image" content="<?= $share_image; ?>" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="<?= $_SERVER['SERVER_NAME']; ?>" />
    <meta name="twitter:title" content="<?= $title; ?>" />
    <meta name="twitter:url" content="<?= $full_url; ?>" />
    <meta name="twitter:description" content="<?= $page->seo_description; ?>" />
    <meta name="twitter:image" content="<?= $share_image; ?>" />
    <meta name="twitter:image:alt" content="<?= $_SERVER['SERVER_NAME']; ?>">

    <link rel="apple-touch-icon" sizes="57x57" href="<?= $base; ?>images/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="<?= $base; ?>images/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?= $base; ?>images/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="<?= $base; ?>images/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?= $base; ?>images/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="<?= $base; ?>images/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="<?= $base; ?>images/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="<?= $base; ?>images/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="<?= $base; ?>images/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?= $base; ?>images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="<?= $base; ?>images/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?= $base; ?>images/favicon/favicon-16x16.png">
    <link rel="manifest" href="<?= $base; ?>images/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="<?= $base; ?>images/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <link rel="stylesheet" href="<?= $base; ?>css/font/stylesheet.css">
    <link rel="stylesheet" href="<?= $base; ?>css/style.css?v=<?= time(); ?>">
    <script src="<?= $base; ?>js/svg-symbols.js?v=<?= time(); ?>"></script>
    <!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script> <![endif]-->


    <?= $seo_tools->sidebar; ?>
</head>
<body <?= ($page->id==1) ? 'data-direction="0" class="index"' : 'class="inner"'; ?>>

<?= $seo_tools->body; ?>

<div class="svg-placeholder" style="border: 0; clip: rect(0 0 0 0); height: 1px;
        margin: -1px; overflow: hidden; padding: 0;
        position: absolute; width: 1px;"></div>
<script>
    document
        .querySelector('.svg-placeholder')
        .innerHTML = SVG_SPRITE;
</script>

<header
    class="header
    <?= ($page->id==1) ? 'header--index' : ''; ?>
    <?= ($page->template->name=='about') ? 'about-head' : ''; ?>
    <?= ($page->template->name=='news-item') ? 'news-head' : ''; ?>

          ">
    <div class="header__container"  data-aos="fade-down" data-aos-delay="1200" data-aos-duration="700" >
        <div class="container-fluid">
            <a href="<?= $home->url; ?>" class="header__logo" aria-label="universal">
                <img src="<?= $base; ?>images/universal.svg?v=3" alt="">
            </a>
            <nav class="header__main-nav">
                <ul class="header__main-menu">
                    <?php foreach ($home->children as $it): if($it->check) continue; ?>
                    <li><a href="<?= $it->url; ?>"><?= $it->title; ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </nav>
            <div class="header__right">
                <div class="header__lang">
                    <?php foreach ($languages as $lang): if($lang->id==$user->language->id) continue; ?>
                    <a href="<?= $page->localUrl($lang); ?>"><?= $lang->title; ?></a>
                    <?php endforeach; ?>
                </div>
                <div class="header__burger d-flex"><i></i></div>
            </div>
        </div>
    </div>

    <?php if($page->template->name=='about'): ?>
        <div class="container-fluid header__content">

            <div class="pages-pattern2">
                <img src="<?= $page->img1->url; ?>" alt="" data-aos="fade-up" data-aos-delay="250" data-aos-duration="900">
            </div>
            <div class="about-text" data-aos="fade-left" data-aos-delay="350" data-aos-duration="700">
                <?= $page->sidebar; ?>
            </div>

            <div class="pages-head d-block">
                <div class="pages-pattern" >
                    <img src="<?= $base; ?>images/services-page-pattern.svg" alt="" data-aos="fade-right" data-aos-delay="300" data-aos-duration="900">
                </div>

                <h1 class="pages-title" data-aos="fade-down" data-aos-delay="350" data-aos-duration="700"><?= $page->headline; ?></h1>

            </div>
        </div>
    <?php endif; ?>

    <?php if(preg_match('/projects|services/',$page->template->name)): ?>
        <div class="container-fluid header__content">


            <div class="pages-head d-block">
                <div class="pages-pattern" >
                    <img src="<?= $base; ?>images/services-page-pattern.svg" alt="" data-aos="fade-right" data-aos-delay="300" data-aos-duration="900">
                </div>

                <h1 class="pages-title" data-aos="fade-down" data-aos-delay="350" data-aos-duration="700"><?= $page->title; ?></h1>

            </div>
        </div>
    <?php endif; ?>

    <?php if(preg_match('/faq|news|project-item|career-item/',$page->template->name) && $page->parent->template->name!='news'): ?>
        <div class="container-fluid header__content">

            <div class="pages-head d-block">
                <div class="pages-pattern" >
                    <img src="<?= $base; ?>images/services-page-pattern.svg" alt="" data-aos="fade-right" data-aos-delay="300" data-aos-duration="900">
                </div>

                <h1 class="pages-title" data-aos="fade-down" data-aos-delay="350" data-aos-duration="700"><?= $page->title; ?></h1>

                <?php if($page->template->name=='project-item'): ?>
                    <ul data-aos="fade-up" data-aos-delay="350" data-aos-duration="700">
                        <?php foreach ($page->services as $serv): ?>
                        <li><a href="<?= $serv->url; ?>"><?= $serv->title; ?></a></li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>
                <?php if($page->template->name=='career-item'): ?>
                    <ul data-aos="fade-up" data-aos-delay="350" data-aos-duration="700">
                        <?php foreach ($page->list_s as $serv): ?>
                            <li><a href="<?= $serv->url; ?>"><?= $serv->title; ?></a></li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>
            </div>
        </div>
    <?php endif; ?>

</header>



<div class="burger-nav">
    <div class="burger-nav__blur"></div>
    <div class="burger-nav__body">
        <div class="burger-nav__contact">
            <a href="tel:<?= $contact->txt1; ?>"><?= $contact->txt1; ?></a>
            <a href="mailto:<?= $contact->txt2; ?>"><?= $contact->txt2; ?></a>
        </div>
        <a href="#" class="burger-nav__close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <use xlink:href="#svg-close"></use>
            </svg>
        </a>
        <h5 class="burger-nav__title">
            <?= $services->title; ?>
        </h5>
        <ul class="burger-nav__menu">
            <?php foreach ($services->children as $it): ?>
            <li><a href="<?= $it->url; ?>"><?= ($it->headline) ? $it->headline : $it->title; ?></a></li>
            <?php endforeach; ?>
        </ul>
        <h5 class="burger-nav__title">
            <?= _x('Other','-'); ?>
        </h5>
        <div class="row">
            <div class="col-md-6 col-6">
                <ul class="burger-nav__menu">
                    <?php foreach ($home->children as $k=>$it): if($k==4) break; ?>
                    <li><a href="<?= $it->url; ?>"><?= $it->title; ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <div class="col-md-6 col-6">
                <ul class="burger-nav__menu">
                    <?php foreach ($home->children as $k=>$it): if($k<4) continue; ?>
                        <li><a href="<?= $it->url; ?>"><?= $it->title; ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
        <div class="burger-nav__social">
            <ul>
                <li><?= _x('We are in social','-'); ?></li>
                <?php foreach ($home->smm as $social): ?>
                    <li>
                        <a href="<?= $social->txt1; ?>" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <use xlink:href="#svg-<?= $social->social->title; ?>"></use>
                            </svg>
                        </a>
                    </li>
                <?php endforeach; ?>

            </ul>
        </div>
    </div>
</div>

