
# How to flash


## Flashcards

![flashbutton]{ width="150", align=left}

To start flashcard program, click "flash" button from the sidebar.

<br>
<br> 



## Merge list


The flashcard only draw card from properly arranged sheet. if you would like to draw card from multiple sheets, it is required to generate a new sheet contains all the the words. 


<br> 
<br> 


### Example: merge multiple lists for flashcards

![sheetSwitch]{ width="400", align=left}

Assuming an german english learner has multiple vocabulary sheets, each of the sheet contains a piece of the vocabulary he noted. The source of the vocabulary used in the tutorial can be found via [here](https://www.frenzelschule.de/download/business-english-vocabulary-vocabulary-list-exam.xls) provided by [Private Business School Frenzel](https://www.frenzelschule.de/).

<br> 
<br>
<br> 
<br> 
<br>
<br> 
<br> 
<br> 
<br> 

![mergeTable]{ width="500", align=right}

![mergebutton]{ width="150", align=left}

Once you click the `Merge lists` button from `Flash panel` , the loaded table shows all sheet names from the currect Spreadsheet. At least 2 sheets selection is required. Each sheet should have proper `front` and `back` in the first row as headers similar to the norm in [`Flash`][flashcardSection] section.


<br> 
<br>
<br> 
<br> 
<br> 
<br>
<br> 
<br> 
<br> 

![mergedSheet]{ width="350", align=left}

Finally, the selected sheets will be merged into one sheet named as Flashing List- `+` numeric time stamp (order: day, month, year, hour, min, second) based on your local time.



[flashbutton]: ../assets/images/flash_button.png
[mergebutton]: ../assets/images/merge_button.png
[sheetSwitch]: ../assets/images/sheets_switch.gif
[mergeTable]: ../assets/images/merge_table.png
[mergedSheet]: ../assets/images/merged_sheet.gif



[flashcardSection]: #flashcards
## Commands

* `mkdocs new [dir-name]` - Create a new project.test
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.



