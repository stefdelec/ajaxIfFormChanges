# ajaxIfFormChanges
Is a jquery plugin to handle multi-ajax request for forms ONLY if they have changed. It optimizes the number of request.

It doesn't listen to "input" or "change" event but compare 2 states of form. So if an input had "Myvalue" as a value, then user change it to "not my value" and change it back to "Myvalue", no ajax request will be processed.



###Example :

```
$("HTMLElement to attach 'click event'").multiAjaxFormIfItHasChanged(
      [{
        id:"id of the form", 
        ajax:function(){my ajax request}
        },...otherObject
        ],
        CallBackOnSuccess,
        CallBackOnFailure)

```
###The objects :
```
$("CSS SELCTOR").multiAjaxFormIfItHasChanged(
      [Object as Defined Below],
        callback function,
        callback function)
```
The object must have 2 properties:
1/ id
2/ Ajax function (or any promise).
```
{
  id:"id of the form", 
  ajax:function(){return myajaxrequest}
}
```
###Add new form after initialisation :
```
$("HTML Element to attach 'click event' ").multiAjaxFormIfItHasChanged(
      [{
        id:"id of the form", 
        ajax:function(){my ajax request}
        })
```
