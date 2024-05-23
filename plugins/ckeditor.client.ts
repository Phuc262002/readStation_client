import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Editor from 'ckeditor5-custom-build';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(CKEditor);
  return {
    provide: {
      ckeditor: {
        classicEditor: Editor,
      },
    },
  };
});