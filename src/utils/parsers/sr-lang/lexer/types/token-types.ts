export enum TokenTypes {
    Text = "Text", // Text without any special meaning
    SectionStart = "SectionStart", // Start marker for a section, which always ends with a section end marker or by the end of the file
    SectionEnd = "SectionEnd", // End marker for a section, which always starts with a section start marker
    Divider = "Divider", // Divider between two sections, without boundaries relevant to the divider itself
    SectionTag = "SectionTag", // A section tag, which is between a section start and end marker and can be used to further identify the section
};