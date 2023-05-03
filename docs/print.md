
# Print flashcards

<div style="display: flex; align-items: center;" markdown>
![printButton]{ width="150", align=left}
This function is designed to facilitate the creation of printed versions of flashcards, which can be used in educational settings such as classrooms.
</div>


<div style="display: flex; align-items: center;" markdown>
![printOption]{ width="300", align=right}
The print panel allows you to layout the flashcards for printing. To use this function, you need to select one or more sheets that have proper front and back headers in the first row (same as mentioned in [`Flash`][flashcardSection] section). The flashcards will be arranged in a 4 x 4 grid with a 1 cm margin between the cards, as shown in the figure below:
</div>


<figure markdown>
![printedPage]{ width="700"}
  <figcaption>Gnerated google doc file with 4 x 4 cards per a A4 page </figcaption>
</figure>



### Supplementary information

* `File location` - Regarding the location of the generated document, a hyperlink will be displayed at the bottom of the user interface upon completion of the process. However, in case the link is missed, the resulting Google Docs file can be found in the user's Google Drive account. The file will be named according to the format `Flashing List-` followed by a numeric `time stamp` indicating the day, month, year, hour, minute, and second based on the user's local time.

* `Font` - In terms of font size, the default setting is relatively small to accommodate various types of text content. Users may adjust the font size to their preference on the generated Google Docs file before printing.



[printButton]: ./assets/images/print_button.png
[printOption]: ./assets/images/print_option.png
[printedPage]: ./assets/images/printed_page.png
[flashcardSection]: ./index.md#flashcards




