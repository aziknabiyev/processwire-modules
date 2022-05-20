<?php require 'inc/header.inc'; ?>

<div id="all_parts">

    <section class="banner">
        <div class="banner__video">
            <video src="<?= $page->file->first()->url; ?>" autoplay muted loop></video>
            <img src="<?= $base; ?>images/video_bg.jpg" alt="" class="video_bg">
        </div>
        <div class="banner__img">
            <?php if(preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',substr($useragent,0,4))): ?>
                <img src="<?= $page->img2->url; ?>" alt="">
            <?php else: ?>
                <img src="<?= $page->img1->url; ?>" alt="">
            <?php endif; ?>
        </div>
        <div class="banner__text">
            <div class="container-fluid">
                <div class="row g-0">
                    <div class="col-md-6">
                        <h1 class="banner__title" data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">
                         <?= $page->headline; ?>
                        </h1>
                        <a href="javascript:void(0);" class="banner__scroll" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="700">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <use xlink:href="#svg-arrow-bottom"></use>
                                </svg>
                            </span>
                            <?= _x('Scroll for the best experience','-'); ?>
                        </a>
                    </div>
                    <div class="col-md-6">
                        <ol class="banner__menu">
                            <?php foreach ($page->links as $link): ?>
                            <li data-aos="fade-up" data-aos-delay="800" data-aos-duration="700">
                                <a class="banner__hover" data-url="<?= $link->redirect->img1->url; ?>"
                                   href="<?= $link->redirect->url; ?>"><?= $link->title; ?></a>
                            </li>
                            <?php endforeach; ?>
                        </ol>
                        <div class="banner__bottom-text" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="700">
                            <p><?= _x('Mainly engaged in the supply of materials used in construction, marinem, oil & gas industry','-'); ?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services section -->
    <section class="services">
        <div class="services__pattern">
            <img src="<?= $base; ?>images/services-pattern.svg" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="700" alt="">
        </div>
        <div class="services__pattern2">
            <img src="<?= $base; ?>images/services-pattern2.svg" data-aos="fade-right" data-aos-delay="1200" data-aos-duration="700" alt=""
                 alt="">
        </div>
        <div class="row g-0">
            <div class="col-md-6 services__left">
                <h3 class="section-title" data-aos="fade-up" data-aos-delay="150" data-aos-duration="700"><?= _x('Wide range of services','-'); ?></h3>
                <ul class="section-menu">
                    <?php foreach ($services->children as $k=>$item): ?>
                    <li data-aos="fade-right" data-aos-delay="150" data-aos-duration="700">
                        <a href="<?= $item->url; ?>" class="active tab-item" data-tab="tab<?= $k; ?>"><?= $item->title; ?></a>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <div class="col-md-6 services__right" data-aos="fade-left" data-aos-delay="550" data-aos-duration="700">
                <span class="dots"></span>
                <div class="services__desc">
                    <div class="services__content" data-aos="fade-up" data-aos-delay="950" data-aos-duration="700">
                        <div class="tab-content">
                            <?php foreach ($services->children as $k=>$item): ?>
                            <div class="tab-content__item <?= (!$k) ? 'active' : ''; ?>" data-tab="tab<?= $k; ?>">
                                <?= $item->body; ?>
                            </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                    <a href="<?= $services->child()->url; ?>" class="btn w-100">
                        <?= _x('Learn more','-'); ?>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                            <use xlink:href="#svg-arrow-right2"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- End Services section -->


    <!-- Statistics section -->
    <section class="statistics">
        <div class="row g-0">
            <div class="col-md-6">
                <h4 class="section-title" data-aos="fade-up" data-aos-delay="150" data-aos-duration="700">
                    <?= _x('The numbers speak for our experience','-'); ?>
                </h4>
            </div>
            <div class="col-md-6">
                <div class="statistics__text" data-aos="fade-up" data-aos-delay="150" data-aos-duration="700">
                    <p><?= $page->summary; ?></p>
                </div>
            </div>
            <?php foreach ($page->list2 as $list): ?>
            <div class="col-md-6 col-6">
                <div class="statistics__item" data-aos="fade-up" data-aos-delay="150" data-aos-duration="700">
                    <h2 class="statistics__count"><?= $list->title; ?></h2>
                    <p><?= $list->headline; ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </section>
    <!-- End Statistics section -->

    <!-- Projects section -->
    <section class="projects">
        <div class="container-fluid pe-md-0">
            <h4 class="section-title" data-aos="fade-up" data-aos-delay="150" data-aos-duration="700">
                <?= _x('Successfully completed projects','-'); ?>
            </h4>
            <?php foreach ($projects->children as $it): ?>
            <div class="row g-0 projects__item">
                <div class="col-md-4" data-aos="fade-up" data-aos-delay="150" data-aos-duration="700">
                    <a href="<?= $it->url; ?>" class="projects__img">
                        <img src="<?= $it->image->url; ?>" alt="">
                    </a>
                </div>
                <div class="col-md-8 d-flex align-items-center justify-content-between" data-aos="fade-up" data-aos-delay="150"
                     data-aos-duration="700">
                    <div class="projects__desc">
                        <a href="<?= $it->url; ?>" class="projects__title"><?= $it->title; ?></a>
                        <p><?= $it->headline; ?></p>
                        <ul>
                            <?php foreach ($it->services as $serv): ?>
                            <li><a href="<?= $serv->url; ?>"><?= $serv->title; ?></a></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <a href="<?= $it->url; ?>" class="btn projects__btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" class="m-0">
                            <use xlink:href="#svg-arrow-right2"></use>
                        </svg>
                    </a>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
        <a href="<?= $projects->url; ?>" class="btn btn-full mt-4"><?= _x('View all projects','-'); ?></a>
    </section>
    <!-- End Projects section -->


    <?php require 'inc/map.inc'; ?>

    <!-- Partners & Customers section -->
    <section class="partners">
        <div class="partners__pattern ">
            <img src="<?= $base; ?>images/partners-pattern.svg" data-aos="fade-left" data-aos-delay="450" data-aos-duration="700" alt="">
        </div>
        <div class="container-fluid pe-lg-0">
            <h4 class="section-title" data-aos="fade-up" data-aos-delay="250" data-aos-duration="700"><?= _x('We operate globally','-'); ?></h4>
            <ul class="section-menu">
                <?php
                $partners_image=[];
                ?>
                <?php foreach ($page->list_images as $k=>$it): ?>
                <li data-aos="fade-right" data-aos-delay="450" data-aos-duration="700">
                    <a href="javascript:void(0);" <?= (!$k) ? 'class="active"' : ''; ?>><?= $it->title; ?></a>
                </li>
                    <?php
                    $partners_image[$k]=[];
                    foreach ($it->images as $img){
                        $partners_image[$k][]=$img->url;
                    }
                    ?>
                <?php endforeach; ?>

            </ul>
            <?php foreach ($partners_image as $key=>$imgs): ?>
            <div class="tab-item">
                <div class="partners__block" data-aos="fade-up" data-aos-delay="450" data-aos-duration="700">
                    <ul class="partners__row">
                        <?php $incu=count($imgs)/6; ?>
                        <?php for($i=0;$i<6;$i++): ?>
                        <li>
                            <?php foreach ($imgs as $k=>$img): $y=$i+1; ?>
                            <?php if($k>=($i*$incu) && $k<($y*$incu)): ?>
                            <a href="javascript:void(0);" class="partners__item <?= ($k==($i*$incu)) ? 'active' : ''; ?>" aria-label="man">
                                <img src="<?= $img; ?>" alt="">
                            </a>
                            <?php endif; ?>
                            <?php endforeach; ?>
                        </li>
                        <?php endfor; ?>
                    </ul>
                </div>
                <a href="javascript:void(0);" class="btn partners__btn">
                    <span><?= _x('view other 65','-'); ?></span>
                </a>
            </div>
            <?php endforeach; ?>
        </div>
    </section>
    <!-- End Partners & Customers section -->

    <!-- Contact section -->
    <section class="contact-section">
        <div class="contact-section__img">
            <img src="<?= $contact->image->url; ?>" alt="">
        </div>
        <div class="container-fluid">
            <div class="contact-section__text">
                <h2 data-aos="fade-up" data-aos-delay="250" data-aos-duration="700"><?= _x('Contact with us','-'); ?></h2>
                <p data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">
                    <?= $contact->sidebar; ?>
                <a href="<?= $contact->url; ?>" class="btn btn-icon" data-aos="fade-up" data-aos-delay="450" data-aos-duration="700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                        <use xlink:href="#svg-arrow-right2"></use>
                    </svg>
                </a>
            </div>
        </div>
    </section>
    <!-- End Contact section -->



</div>

<?php require 'inc/footer.inc'; ?>
