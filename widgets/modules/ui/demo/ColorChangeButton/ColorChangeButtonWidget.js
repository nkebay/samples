define.Class(
    "ui/demo/ColorChangeButton/ColorChangeButtonWidget",
    function(require) {
        return {
            init: function(widgetConfig) {
                this.colors = widgetConfig.colors
                this.curColor = 0;

                this.$rootEl = this.$();
                // jQuery short-hand: var $rootEl = this.$();

                this.$rootEl.click(function(e) {
                    this.nextColor();
                }.bind(this));
            },

            nextColor: function() {
                var nextColor = this.colors[(this.curColor++) % this.colors.length];
                this.$rootEl.css("background-color", nextColor);
            }
        }
    });