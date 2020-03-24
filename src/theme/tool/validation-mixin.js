/**
 * @fileoverview add some validate method for jquery validation
 * @author Linda Zhang
 * @example
 * */

define([
    'Arrow_Theme/js/mixins/validation-arrow',
    'translate-mage-add'
],function(
    Validation
){

    return function(validation){
        return Validation(validation);
    }

})
