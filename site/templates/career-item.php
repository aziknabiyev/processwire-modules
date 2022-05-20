<?php require 'inc/header.inc'; ?>


<div id="all_parts">

    <section class="vacancies">
        <a href="javascript:void(0);" class="btn w-100 justify-content-center scroll_to" data-anchor="send_vacancy">
            <?= _x('Send a resume','-'); ?>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                <use xlink:href="#svg-arrow-right2"></use>
            </svg>
        </a>
        <div class="container-fluid">
            <div class="row vacancies__body">
                <?php foreach ($page->career as $it): ?>
                <div class="col-md-6">
                    <h2 class="vacancies__title"  data-aos="fade-down" data-aos-delay="250" data-aos-duration="700"><?= $it->title; ?></h2>
                    <ul class="vacancies__info">
                        <?php foreach ($it->list_s as $list): ?>
                            <li data-aos="fade-right" data-aos-delay="250" data-aos-duration="700"><?= $list->title; ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
        <?php require 'inc/apply.inc'; ?>
    </section>


</div>

<?php require 'inc/footer.inc'; ?>
