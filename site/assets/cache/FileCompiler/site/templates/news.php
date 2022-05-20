<?php require(\ProcessWire\wire('files')->compile('inc/header.inc',array('includes'=>true,'namespace'=>true,'modules'=>true,'skipIfNamespace'=>true))); ?>


<div id="all_parts">
    <section class="news">
        <div class="container-fluid">
            <div class="row g-0">
                <?php foreach ($page->children as $item): ?>
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">
                    <a href="<?= $item->url; ?>" class="news__item">
                        <div class="news__img" style='background-image: url("<?= $item->image->url; ?>")'>
                        </div>
                        <div class="news__text">
                            <span class="news__date">
                                <?php $dt=explode('.',$item->date); ?>
                                <?= $dt[0].' '.$_months[$dt[1]].' '.$dt[2]; ?>
                            </span>
                            <h3 class="news__title"><?= $item->title; ?></h3>
<!--                            <ul class="news__category">-->
<!--                                --><?php //foreach ($item->tag_select as $tag): ?>
<!--                                <li>--><?//= $tag->title; ?><!--</li>-->
<!--                                --><?php //endforeach; ?>
<!--                            </ul>-->
                        </div>
                    </a>
                </div>
                <?php endforeach; ?>
            </div>
<!--            <a href="#" class="btn btn-full">Load more</a>-->
        </div>
    </section>
</div>

<?php require(\ProcessWire\wire('files')->compile('inc/footer.inc',array('includes'=>true,'namespace'=>true,'modules'=>true,'skipIfNamespace'=>true))); ?>
