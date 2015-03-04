Example usage:


This pattern argument takes the following arguments:

- **source**: Selector of items *(.checked SHOULD NOT be added)* 
- **target**: Selector of element where selected items are placed.
- **prepend**: Character or text to prepend to each link text.
- **listprepend**: Character or text to prepend to list of links.
- **description**: Selector in the selected item to use as text of the link.


The links created have the following structure:
```javascript
var value = $(el).find('input').val(),
    description = $(el).find('strong').html(),
    href = $(el).find('a').attr('href') || '#',
    link = '<a href="' + href +'" data-value-id="' + value + '">'+ options.prepend + description + '</a>';

```

**data-value-id** is used for preserving state

```html
  <form id="items"
        action="#selected-users"
        class="search-result users pat-autosubmit pat-tagger" 
        data-pat-tagger="source: label.item.user; target: em#selected-users;prepend: @">
    <fieldset data-pat-checklist="select: #status-user-selector .select-all; deselect: #status-user-selector .deselect-all"
              class="checklist pat-checklist users unchecked">
      <label class="item user unchecked">
        <input value="1" type="checkbox" name="users:list"/>
        <a class="follow">
          <img src="/media/avatar-lola.jpg" alt="">
          <strong class="title icon-user">Lola</strong>
        </a>
      </label>
      <label class="item user unchecked">
        <input value="1" type="checkbox" name="users:list"/>
        <a class="follow">
          <img src="/media/avatar-otis.jpg" alt="">
          <strong class="title icon-user">Otis</strong>
        </a>
      </label>      
      <label class="item user unchecked">
        <input value="1" type="checkbox" name="users:list"/>
        <a class="follow">
          <img src="/media/avatar-ronaldo.jpg" alt="">
          <strong class="title icon-user">Ronaldo</strong>
        </a>
      </label>            
    </fieldset>
  </form>
```


**Todo**  href should be passed in data attribute in checklist item.