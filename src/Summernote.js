module.exports = {

    template: '<textarea :name="name"></textarea>',

    props: {
        model: {
            required: true,
        },

        name: {
            type: String,
            required: true,
        },

        height: {
            type: String,
            default: '150'
        }
    },

    mounted() {

    
        let config = {
            height: this.height
        };

        let vm = this;

        config.callbacks = {

            onInit: function () {
                $(vm.$el).summernote("code", vm.model);
            },

            onChange: function () {
                vm.$emit('change', $(vm.$el).summernote('code'));
            },

            onBlur: function () {
                vm.$emit('change', $(vm.$el).summernote('code'));
            }
        };

        $(this.$el).summernote(config);

    },

}