

//FORM CHANGES
// This jquery plugin "listen" and save a form, in order to check if there is differences between 2 states. 

    $.fn.formChanges = function (action) {
        // [{value:22,id:""},{..}..]
        $.fn._listen = function () {
            let array = [];
            $(this).find("input, select").each(function (i, e) {
                if ($(e).is("input:radio") && !$(e).prop("checked")) return;


                array.push({
                    id: $(e).attr("id"),
                    value: $(e).val()
                })

            })
            return array

        }

        $.fn._check = function () {
            let newForm = $(this)._listen();
            let oldForm = $(this).data("savedForm");

            if (oldForm == undefined) return true
            if (newForm.length != oldForm.length) return true

            let whatAreTheDifferences = function (newObj) {
                let oldObj = oldForm.filter(x=>(x.id == newObj.id))[0];
                return oldObj.value != newObj.value
            }

            let r = newForm.filter(whatAreTheDifferences);
            if (r.length > 0) return true
            else return false

        }


        if (this == null) return false;
        else if (action == "listen") $(this).data("savedForm", $(this)._listen())
        else if (action == "check") return $(this)._check()
    }

    
    /*
This jquery plugin manage multiple forms and update it only if the form has changed.
Forms are submitted on a click event only if their states actually changed.
*/
   

    $.fn.multiAjaxFormIfItHasChanged = function (arrayToBeProcess, callbackSuccess, callbackFailures) {

        //arrayToBeProcess ={ id:"",ajax:$.ajax()}
        //init if it is first time




        $.fn._addNew = function (obj) {
            $(this).data("arrAjax").push(obj);
            $("#" + obj.id).formChanges("listen")
        }

        //Save forms
        $.fn._listenToArray = function () {
            for(let item of arrayToBeProcess) $(this)._addNew(item);
        }


        $.fn._triggerAjaxRequest = function () {
            let arrOfAjax = $(this).data("arrAjax").map(function (obj) {
                //console.log(obj.ajax);

                if ($("#" + obj.id).formChanges("check")) {
                    $("#" + obj.id).formChanges("listen");
                    return obj.ajax();
                }

            });
            $.when(...arrOfAjax).then(callbackSuccess, callbackFailures)
            
        }
        //On click


        if ($(this).data("arrAjax") == undefined) {
            $(this).on("click", $(this)._triggerAjaxRequest);
            $(this).data("arrAjax", []);
            $(this)._listenToArray(arrayToBeProcess);
        }
        else {
            $(this)._listenToArray(arrayToBeProcess)
        }
        return this;
    }
