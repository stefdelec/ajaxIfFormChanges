# ajaxIfFormChanges
Is a jquery plugin to handle multi-ajax requests for forms ONLY if they have changed. It optimizes the number of requests.

It doesn't listen to "input" or "change" events but it compares 2 states of a form. For example, if an input had "Myvalue" as value, then user changes it to "not my value" and change it back to "Myvalue",  ajax request will not be triggered.

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
