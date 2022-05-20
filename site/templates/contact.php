<?php namespace ProcessWire; ?>
<?php require 'inc/header.inc'; ?>


<div id="all_parts">
    <section class="contact">
        <div class="container-fluid pe-lg-0">
            <div class="row g-0">
                <div class="col-lg-6">
                    <div class="pages-head d-block">
                        <div class="pages-pattern">
                            <img src="<?= $base; ?>images/services-page-pattern.svg" alt="" data-aos="fade-right" data-aos-delay="300"
                                 data-aos-duration="900">
                        </div>
                        <h1 class="pages-title"
                            data-aos="fade-down"
                            data-aos-delay="350"
                            data-aos-duration="700"><?= _x('Contact with us','-'); ?></h1>
                    </div>
                    <ul class="contact__info">
                        <li data-aos="fade-up" data-aos-delay="350" data-aos-duration="700">
                            <?= _x('Mobile number','-'); ?>
                            <a href="tel:<?= $page->txt1; ?>"><?= $page->txt1; ?></a>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="450" data-aos-duration="700">
                            E-mail
                            <a href="mailto:<?= $page->txt2; ?>"><?= $page->txt2; ?></a>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="550" data-aos-duration="700">
                            <?= _x('Address','-'); ?>
                            <a href="javascript:void(0);"><?= $page->txt3; ?></a>
                        </li>
                    </ul>
                    <ul class="contact__social" data-aos="fade-up" data-aos-delay="650" data-aos-duration="700">
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
                <div class="col-lg-6">
                    <div class="contact__map" data-aos="fade-left" data-aos-delay="350" data-aos-duration="700">
                        <div id="map"></div>
                        <a href="javascript:void(0);" class="btn btn-medium contact__btn">
                            <?= _x('Send request','-'); ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <use xlink:href="#svg-arrow-right2"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    </section>


    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBje00Ne9A5xmN8NUGe-8Ukjue2RNhIfMU&language=az"></script>


</div>


<?php require 'inc/footer.inc'; ?>
