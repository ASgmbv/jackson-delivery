function convertItemsToString(items) {
  let text = "";

  items.forEach((element) => {
    for (const [key, value] of Object.entries(element)) {
      if (key !== "image") {
        text += `${key}: ${value}\n`;
      }
    }
  });

  text += "------------------";
}
