<?php require 'inc/header.inc'; ?>


<div id="all_parts">


    <section class="faq">
        <div class="container-fluid">
            <div class="content">
                <?php foreach ($page->list2 as $list): ?>
                <div class="faq__item" data-aos="fade-up" data-aos-delay="150" data-aos-duration="700">
                    <a href="javascript:void(0);" class="faq__title"><?= $list->title; ?></a>
                    <div class="faq__desc">
                        <p><?= $list->headline; ?></p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>


</div>

<?php require 'inc/footer.inc'; ?>
