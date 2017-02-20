# ajaxIfFormChanges

#Example

```
$("HTML Element to attach 'click event' ").multiAjaxFormIfItHasChanged(
      [{
        id:"id of the form", 
        ajax:function(){my ajax request}
        },...otherObject
        ],
        CallBackOnSuccess,
        CallBackOnFailure)

```
###The object

The object must have 2 properties:
1/ id
2/ Ajax function (or any promise).
```
{
  id:"id of the form", 
  ajax:function(){my ajax request}
}
```
###Add new form after initialisation.
```
$("HTML Element to attach 'click event' ").multiAjaxFormIfItHasChanged(
      [{
        id:"id of the form", 
        ajax:function(){my ajax request}
        })
```
