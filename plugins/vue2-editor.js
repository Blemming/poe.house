import Vue from 'vue';
import { VueEditor, Quill } from 'vue2-editor';
import ImageResize from 'quill-image-resize-module';

Quill.register('modules/imageResize', ImageResize);

Vue.component('vueEditor', VueEditor);
