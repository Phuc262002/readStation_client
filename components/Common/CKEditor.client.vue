<template>
    <ckeditor :editor="editor" :value="value" @input="emitInput" :config="editorConfiguration" />
</template>

<script setup>
defineProps({
    value: {
        type: String,
    },
});
const emit = defineEmits(["input"]);
const emitInput = (event) => {
    emit("input", event);
};
const { $ckeditor } = useNuxtApp();
const editor = $ckeditor.classicEditor;

const editorConfiguration = {
    allowedContent: "p b i; a[!href] table",
    removePlugins: ["Title"],
    image: {
        toolbar: [
            "imageStyle:alignLeft",
            "imageStyle:alignCenter",
            "imageStyle:alignRight",
            "|",
            "imageResize",
            "|",
            "imageTextAlternative",
        ],
        styles: ["alignLeft", "alignCenter", "alignRight"],
        resizeOptions: [
            {
                name: "imageResize:original",
                label: "Original",
                value: null,
            },
            {
                name: "imageResize:50",
                label: "50%",
                value: "50",
            },
            {
                name: "imageResize:75",
                label: "75%",
                value: "75",
            },
        ],
    },
    toolbar: {
        items: [
            "heading",
            "fontFamily",
            "fontSize",
            "alignment",
            "bold",
            "italic",
            "underline",
            "highlight",
            "fontColor",
            "fontBackgroundColor",
            "|",
            "link",
            "bulletedList",
            "numberedList",
            "subscript",
            "superscript",
            "|",
            "indent",
            "outdent",
            "specialCharacters",
            'removeFormat',
            'strikethrough',
            'horizontalLine',
            "|",
            // 'imageUpload',
            'imageInsert',
            'mediaEmbed',
            "|",
            'blockQuote',
            'insertTable',
            "undo",
            "redo",
            'exportPdf',
            'MathType',
            'ChemType'
        ],
        shouldNotGroupWhenFull: true,
    },
    mediaEmbed: {
        previewsInData: true,
    },
    table: {
        contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },
    language: "vi",
};
</script>

<style>
.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,
.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners {
  border-radius: 8px !important;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.ck-rounded-corners .ck.ck-editor__main > .ck-editor__editable,
.ck.ck-editor__main > .ck-editor__editable.ck-rounded-corners {
  border-radius: 8px !important;
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.ck-editor__editable {
  min-height: 16rem;
}

</style>
