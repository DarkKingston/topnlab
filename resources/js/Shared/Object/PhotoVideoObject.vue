<script>
import { onMounted } from "vue";
import {Fancybox} from "@fancyapps/ui";
export default {
    props:{
        object: Object
    },
    components:{

    },
    setup(){

        onMounted(() => {
            Fancybox.bind('[data-fancybox="object_modal"]', {
                Toolbar: false,
                animated: false,
                hideScrollbar: false,
                click: false,
            });
        });

        return {
        }
    }
}
</script>

<template>
 <div class="object_wrapper">
    <div class="modal_photo">
        <div class="modal_photo_separator fz-13 tt">
            фото
        </div>
        <div class="modal_photo_btn">
            <div class="btn_object ml-a">
                <svg data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M75.978 24.711H52.026a2.11 2.11 0 0 0-2.111 2.111V55h-9.33a2.111 2.111 0 0 0-1.658 3.418l23.42 29.694a2.111 2.111 0 0 0 3.315 0l23.411-29.695A2.111 2.111 0 0 0 87.415 55h-9.326V26.822a2.11 2.11 0 0 0-2.111-2.111zm7.086 34.51L64 83.4 44.939 59.221h7.088a2.11 2.11 0 0 0 2.111-2.111V28.933h19.728V57.11a2.11 2.11 0 0 0 2.111 2.111zM34.52 101.178a2.11 2.11 0 0 0 2.111 2.111h54.738a2.111 2.111 0 0 0 0-4.222H36.631a2.11 2.11 0 0 0-2.111 2.111z"/></svg>
                Скачать все фото
            </div>
        </div>
        <div class="modal_photo_wrapper">
            <div class="modal_photo_item" data-fancybox="object_modal" href="https://s3-2.topnlab.ru/files-service/storage/0e7ce1f4b8ecd85edcbb51c09b79/105b19f522e0d9490d5a0a99b44cef1d.jpg">
                <img src="https://s3-2.topnlab.ru/files-service/storage/0e7ce1f4b8ecd85edcbb51c09b79/105b19f522e0d9490d5a0a99b44cef1d.jpg" alt="">
            </div>
            <div class="modal_photo_item" data-fancybox="object_modal" href="https://s3-2.topnlab.ru/files-service/storage/0e7ce1f4b8ecd85edcbb51c09b79/105b19f522e0d9490d5a0a99b44cef1d.jpg">
                <img src="https://s3-2.topnlab.ru/files-service/storage/0e7ce1f4b8ecd85edcbb51c09b79/105b19f522e0d9490d5a0a99b44cef1d.jpg" alt="">
            </div>
            <div class="modal_photo_item" data-fancybox="object_modal" href="https://s3-2.topnlab.ru/files-service/storage/0e7ce1f4b8ecd85edcbb51c09b79/105b19f522e0d9490d5a0a99b44cef1d.jpg">
                <img src="https://s3-2.topnlab.ru/files-service/storage/0e7ce1f4b8ecd85edcbb51c09b79/105b19f522e0d9490d5a0a99b44cef1d.jpg" alt="">
            </div>
            <div class="modal_photo_item" data-fancybox="object_modal" href="https://s3-2.topnlab.ru/files-service/storage/0e7ce1f4b8ecd85edcbb51c09b79/105b19f522e0d9490d5a0a99b44cef1d.jpg">
                <img src="https://s3-2.topnlab.ru/files-service/storage/0e7ce1f4b8ecd85edcbb51c09b79/105b19f522e0d9490d5a0a99b44cef1d.jpg" alt="">
            </div>
            <div class="modal_photo_item" data-fancybox="object_modal" href="https://s3-2.topnlab.ru/files-service/storage/0e7ce1f4b8ecd85edcbb51c09b79/105b19f522e0d9490d5a0a99b44cef1d.jpg">
                <img src="https://s3-2.topnlab.ru/files-service/storage/0e7ce1f4b8ecd85edcbb51c09b79/105b19f522e0d9490d5a0a99b44cef1d.jpg" alt="">
            </div>
        </div>
        <div class="modal_photo_separator fz-13 tt">
            видео
        </div>
        <div class="task_table">
            <div class="task_table_content empty">
                Нет видео
            </div>
        </div>
    </div>
 </div>
</template>
