/* eslint-disable no-fallthrough */
export function calculateExtra(item) {
  let extra = 0;

  switch (item.type) {
    case "classics-regular": {
      if (item.meatType === "Ham Steak + $4.95") {
        extra += 4.95;
      }
      if (item.toastSub === "White Bread + $1.25") {
        extra += 1.25;
      } else if (item.toastSub === "Cinnamon Raisin + $1.25") {
        extra += 1.25;
      } else if (item.toastSub === "Butter Croissant + $1.75") {
        extra += 1.75;
      }
      return extra;
    }
    case "classics-signature": {
      if (item.meatType === "Ham Steak + $4.95") {
        extra += 4.95;
      }
      return extra;
    }
    case "classics-biscuits-gravy":

    case "classics-steak-eggs": {
      if (item.toastSub === "White Bread + $1.25") {
        extra += 1.25;
      } else if (item.toastSub === "Cinnamon Raisin + $1.25") {
        extra += 1.25;
      } else if (item.toastSub === "Butter Croissant + $1.75") {
        extra += 1.75;
      }
      return extra;
    }

    default:
      return extra;
  }
}
