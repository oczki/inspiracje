# Data for Magazyn Inspiracji

Each category has its own file, which is being read in its entirety by the app. The entries are shuffled on each page reload, so the user never sees them in the same order on subsequent visits. If the user cycles through all entries without refreshing the page, the order is kept intact.

Typical files used so far have 100–1000 entries. **Avoid using whole dictionaries with millions of lines**, because it would be too heavy for users' devices and might not even load due to memory limits. However, the app only shows a few entries at a time, so the number of DOM elements is kept low even if you have thousands of entries in a single file.

UTF-8 is supported.

## Automatic parsing

To comply with Polish grammar rules, each entry is parsed so that it doesn't have conjunctions hanging at the end of the line.

This means that conjunctions `a`, `i`, `o`, `u`, `w`, `z` will automatically have a non-breaking space (`&nbsp;`) added after them. You don't need to do anything to ensure this behavior; just write normally.

The same goes for numbers, to ensure that units don't wrap into a new line without their associated value. This means that `60 s` will become `60&nbsp;s` and will be treated as one word by the browser when wrapping lines.

## Additional syntax

Each entry can have a "subtitle" to explain or add some flavor to the main entry. This subtitle will be shown under the main word, using a smaller font.

For example, you might want to say "Anime" as main word and explain that it's "Chinese cartoons" if someone didn't know what anime means. In this case, you'd write:

```
Anime _(Chinese cartoons)
```

So: main word, one space, underscore, and the subtitle in parentheses.

## Adding a new category

1. Create a new file in the `data/` directory. Let's call it `pet-names.txt`.
2. Fill that text file with pet names, one per line.  
The order of entries doesn't matter, but you might want to keep the entries alphabetical for your convenience.
3. Create a new file in the `ajax/` directory with a sensible name, e.g. `pet-name.php`.
4. Paste the following into that PHP file:

    ```php
    <?php
    header("Content-type: text/plain; charset=utf-8");

    require "core.php";

    $reader = new GenericReader("../data/pet-names.txt");
    $printer = new Printer($reader);
    $printer->printAllWords();
    ?>
    ```

5. Open the `js/core.js` file and add the new category to the `containers` variable near the top of the file:

    ```javascript
    let containers = [
      // ...
      {
        type: "genre",
        label: "Gatunek",
        isVisible: false,
        prevButtonPrefix: "Poprzedni",
        nextButtonPrefix: "Następny",
      },
      {
        type: "pet-name",
        label: "Lovely pet names",
        isVisible: true,
      },
    ];
    ```

    `type` – Must be the same name as the PHP file's name (without the `.php` extension).  
    `label` – User-friendly text shown above the category.  
    `isVisible` – Initial visibility of this category. If set to false, it will not be shown to users until they manually enable this category in the menu.  
    `prevButtonPrefix` – **(Optional)** – If the page is navigated using a screen reader, this text will be appended before the `label` when user focuses the "previous word" button. It's useful for Polish categories because they can have feminine and masculine names, which need different prefixes. If you don't specify it, "Poprzednia" will be used.  
    `nextButtonPrefix` – **(Optional)** – Same as above, but for the "next word" button. And also only matters to screen readers. If you don't specify it, "Następna" will be used.

6. In the same `js/core.js` file, add a new set of colors to the `containerColors` variable. If you don't, generic monochrome palette will be used.
7. Save everything and refresh the page. You should now have access to the new category.

# License

All this data has been manually compiled from various sources, lists, scraped Wikipedia pages about genres and nouns, chats, live performances, ideas from others, and insomnia. It's the result of over 4 years of search, and it keeps expanding. At this moment it's over 3000 entries, nicely split into categories, so that improvisers can have a useful starting point in their performances.

I can't physically stop you from copying it, but it would be cool to have some credit in your product if you do. Please follow [the MIT license](../LICENSE.md).

Thanks.
