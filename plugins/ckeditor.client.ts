import CKEditor from "@ckeditor/ckeditor5-vue";
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