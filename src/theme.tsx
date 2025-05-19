import { createTheme } from "flowbite-react";

export const customTheme = createTheme({
  badge: {
    "root": {
        "base": "flex h-fit items-center gap-1 font-semibold transition-all duration-500 ease-in-out hover:-translate-y-2 p-2 border border-white/50 dark:border-gray-700/50",
        "color": {
          "info": "bg-gray-100/50 text-gray-800 hover:bg-gray-200/50 dark:bg-gray-700/50 dark:text-gray-300 dark:hover:bg-gray-600/50",
          "gray": "bg-gray-100/50 text-gray-800 hover:bg-gray-200/50 dark:bg-gray-700/50 dark:text-gray-300 dark:hover:bg-gray-600/50",
        },
        "size": {
          "xs": "p-1 text-xs",
          "sm": "p-1.5 text-sm"
        }
      },
      "icon": {
        "off": "rounded px-2 py-0.5",
        "on": "rounded-full p-1.5",
        "size": {
          "xs": "h-3 w-3",
          "sm": "h-3.5 w-3.5"
        }
      }
  },
  button: {
    "base": "relative overflow-hidden flex items-center justify-center rounded-lg text-center font-medium focus:outline-none focus:ring-1 shadow-md transition-all duration-500",
    "disabled": "pointer-events-none opacity-50",
    "fullSized": "w-full",
    "grouped": "rounded-none border-l-0 first:rounded-s-lg first:border-l last:rounded-e-lg focus:ring-2",
    "pill": "rounded-full",
    "size": {
      "xs": "h-8 px-3 text-xs",
      "sm": "h-9 px-3 text-sm",
      "md": "h-10 px-5 text-sm",
      "lg": "h-12 px-5 text-base",
      "xl": "h-[52px] px-6 text-base"
    },
    "color": {
      "default": "bg-white/20 text-gray-800 dark:text-gray-200 hover:bg-white/40 focus:ring-gray-300/30 dark:bg-gray-700/20 dark:hover:bg-gray-700/40 dark:focus:ring-gray-500/30",
      "alternative": "border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700",
      "blue": "bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      "cyan": "bg-cyan-700 text-white hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800",
      "dark": "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
      "gray": "bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
      "green": "bg-green-700 text-white hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
      "indigo": "bg-indigo-700 text-white hover:bg-indigo-800 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800",
      "light": "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
      "lime": "bg-lime-700 text-white hover:bg-lime-800 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800",
      "pink": "bg-pink-700 text-white hover:bg-pink-800 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800",
      "purple": "bg-purple-700 text-white hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800",
      "red": "bg-red-700 text-white hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
      "teal": "bg-teal-700 text-white hover:bg-teal-800 focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800",
      "yellow": "bg-yellow-400 text-white hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
    },
    "outlineColor": {
      "default": "border border-primary-700 text-primary-700 hover:border-primary-800 hover:bg-primary-800 hover:text-white focus:ring-primary-300 dark:border-primary-600 dark:text-primary-500 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:hover:text-white dark:focus:ring-primary-800",
      "blue": "border border-blue-700 text-blue-700 hover:border-blue-800 hover:bg-blue-800 hover:text-white focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:border-blue-700 dark:hover:bg-blue-700 dark:hover:text-white dark:focus:ring-blue-800",
      "cyan": "border border-cyan-700 text-cyan-700 hover:border-cyan-800 hover:bg-cyan-800 hover:text-white focus:ring-cyan-300 dark:border-cyan-500 dark:text-cyan-500 dark:hover:border-cyan-700 dark:hover:bg-cyan-700 dark:hover:text-white dark:focus:ring-cyan-800",
      "dark": "border border-gray-800 text-gray-800 hover:border-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800",
      "gray": "border border-gray-700 text-gray-700 hover:border-gray-800 hover:bg-gray-800 hover:text-white focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-800",
      "green": "border border-green-700 text-green-700 hover:border-green-800 hover:bg-green-800 hover:text-white focus:ring-green-300 dark:border-green-600 dark:text-green-500 dark:hover:border-green-700 dark:hover:bg-green-700 dark:hover:text-white dark:focus:ring-green-800",
      "indigo": "border border-indigo-700 text-indigo-700 hover:border-indigo-800 hover:bg-indigo-800 hover:text-white focus:ring-indigo-300 dark:border-indigo-600 dark:text-indigo-400 dark:hover:border-indigo-700 dark:hover:bg-indigo-700 dark:hover:text-white dark:focus:ring-indigo-800",
      "lime": "border border-lime-700 text-lime-700 hover:border-lime-800 hover:bg-lime-800 hover:text-white focus:ring-lime-300 dark:border-lime-600 dark:text-lime-500 dark:hover:border-lime-700 dark:hover:bg-lime-700 dark:hover:text-white dark:focus:ring-lime-800",
      "pink": "border border-pink-700 text-pink-700 hover:border-pink-800 hover:bg-pink-800 hover:text-white focus:ring-pink-300 dark:border-pink-600 dark:text-pink-500 dark:hover:border-pink-700 dark:hover:bg-pink-700 dark:hover:text-white dark:focus:ring-pink-800",
      "purple": "border border-purple-700 text-purple-700 hover:border-purple-800 hover:bg-purple-800 hover:text-white focus:ring-purple-300 dark:border-purple-600 dark:text-purple-400 dark:hover:border-purple-700 dark:hover:bg-purple-700 dark:hover:text-white dark:focus:ring-purple-800",
      "red": "border border-red-700 text-red-700 hover:border-red-800 hover:bg-red-800 hover:text-white focus:ring-red-300 dark:border-red-600 dark:text-red-500 dark:hover:border-red-700 dark:hover:bg-red-700 dark:hover:text-white dark:focus:ring-red-800",
      "teal": "border border-teal-700 text-teal-700 hover:border-teal-800 hover:bg-teal-800 hover:text-white focus:ring-teal-300 dark:border-teal-600 dark:text-teal-400 dark:hover:border-teal-700 dark:hover:bg-teal-700 dark:hover:text-white dark:focus:ring-teal-800",
      "yellow": "border border-yellow-400 text-yellow-400 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-white dark:focus:ring-yellow-900"
    }
  },
  footer : {
    "root": {
      "base": "relative w-full mt-8 rounded-2xl border border-white/30 dark:border-gray-700/30 bg-bluegray/50 shadow-md md:flex md:items-center md:justify-between dark:bg-gray-800/50",
      "container": "w-full p-6",
      "bgDark": "bg-gray-800"
    },
    "groupLink": {
      "base": "flex flex-wrap text-sm text-gray-500 dark:text-white",
      "link": {
        "base": "me-4 last:mr-0 md:mr-6",
        "href": "hover:underline"
      },
      "col": "flex-col space-y-4"
    },
    "icon": {
      "base": "text-gray-500 dark:hover:text-white",
      "size": "h-5 w-5"
    },
    "title": {
      "base": "mb-6 text-md no-apply font-semibold uppercase text-gray-500 dark:text-white"
    },
    "divider": {
      "base": "my-6 w-full border-white/30 sm:mx-auto lg:my-8 dark:border-gray-700/30"
    },
    "copyright": {
      "base": "text-sm text-gray-500 sm:text-center dark:text-gray-400",
      "href": "ml-1 hover:underline",
      "span": "ml-1"
    },
    "brand": {
      "base": "mb-4 flex items-center sm:mb-0",
      "img": "mr-3 h-8",
      "span": "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
    }
  },
  hr: {
    "root": {
      "base": "my-0 h-px border-0 bg-gray-200 dark:bg-gray-700"
    },
    "trimmed": {
      "base": "mx-auto my-4 h-1 w-[80%] rounded border-0 bg-gray-800/20 md:my-4 dark:bg-gray-400/20"
    },
    "icon": {
      "base": "inline-flex w-full items-center justify-center",
      "hrLine": "my-8 h-1 w-64 rounded border-0 bg-gray-200 dark:bg-gray-700",
      "icon": {
        "base": "absolute left-1/2 -translate-x-1/2 bg-white px-4 dark:bg-gray-900",
        "icon": "h-4 w-4 text-gray-700 dark:text-gray-300"
      }
    },
    "text": {
      "base": "inline-flex w-full items-center justify-center",
      "hrLine": "my-8 h-px w-64 border-0 bg-gray-200 dark:bg-gray-700",
      "text": "absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
    },
    "square": {
      "base": "mx-auto my-8 h-8 w-8 rounded border-0 bg-gray-200 md:my-12 dark:bg-gray-700"
    }
  },
  modal: {
    "root": {
      "base": "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
      "show": {
        "on": "flex bg-gray-100/40 dark:bg-black/50",
        "off": "hidden"
      },
      "sizes": {
        "sm": "max-w-sm",
        "md": "max-w-md",
        "lg": "max-w-lg",
        "xl": "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl"
      },
      "positions": {
        "top-left": "items-start justify-start",
        "top-center": "items-start justify-center",
        "top-right": "items-start justify-end",
        "center-left": "items-center justify-start",
        "center": "items-center justify-center",
        "center-right": "items-center justify-end",
        "bottom-right": "items-end justify-end",
        "bottom-center": "items-end justify-center",
        "bottom-left": "items-end justify-start"
      }
    },
    "content": {
      "base": "relative h-full w-full p-4 md:h-auto",
      "inner": "relative flex max-h-[90dvh] flex-col rounded-2xl bg-white/30 dark:bg-gray-700/30 shadow-md backdrop-blur-2xl border border-white/30 dark:border-gray-700/30",
    },
    "body": {
      "base": "flex-1 overflow-auto p-6",
      "popup": "pt-0"
    },
    "header": {
      "base": "flex items-start justify-between rounded-t border-b p-5 border-white/30 dark:border-gray-600",
      "popup": "border-b-0 p-2",
      "title": "text-xl font-medium text-gray-900 dark:text-white",
      "close": {
        "base": "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        "icon": "h-5 w-5"
      }
    },
    "footer": {
      "base": "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
      "popup": "border-t"
    }
},
  navbar: {
      "root": {
          "base": "fixed top-0 w-full bg-white/50 z-50 md:px-32 px-6 py-2.5 dark:border-gray-700 dark:bg-gray-800/50 backdrop-blur-2xl",
          "rounded": {
              "on": "rounded-b-2xl",
              "off": ""
          },
          "bordered": {
              "on": "border-b border-gray-200 dark:border-gray-700",
              "off": ""
          },
          "inner": {
              "base": "mx-auto flex flex-wrap items-center justify-between",
              "fluid": {
              "on": "",
              "off": "container"
              }
          }
      },
      "brand": {
          "base": "flex items-center font-bold text-gray-700 dark:text-gray-400"
      },
      "collapse": {
          "base": "w-full md:block md:w-auto",
          "list": "mt-4 md:border-0 md:pt-0 pt-4 border-t border-gray-300 dark:border-gray-700 flex flex-col md:items-center md:mt-0 md:flex-row md:space-x-8 space-y-1 md:text-sm md:font-medium",
          "hidden": {
              "on": "transition-all ease-in-out duration-500 opacity-0 md:opacity-100 max-h-0 overflow-hidden md:max-h-screen -translate-y-200 md:translate-y-0",
              "off": "transition-all ease-in-out duration-500 opacity-100 max-h-screen"
          }
      },
      "link": {
          "base": "block py-2 pl-3 pr-4 md:p-0 transition-colors duration-700 ease-in-out",
          "active": {
              "on": "bg-primary-700 text-white md:bg-transparent md:text-primary-700 dark:text-white font-black rounded-xl",
              "off": "text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-primary-700 dark:text-gray-400 font-bold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
          },
          "disabled": {
              "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
              "off": ""
          }
      },
      "toggle": {
          "base": "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
          "icon": "h-6 w-6 shrink-0",
          "title": "sr-only"
      }
  },
  textarea: {
    "base": "block w-full rounded-lg border p-2.5 text-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
    "colors": {
      "gray": "border-gray-300 bg-white/0 text-gray-700 placeholder-gray-500 focus:border-gray-500 focus:ring-gray-100 dark:border-gray-500 dark:bg-gray-700/0 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-gray-800 dark:focus:ring-gray-300 ",
      "failure": "border-red-500 bg-red-50/70 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100/0 dark:text-red-300 dark:focus:border-red-500 dark:focus:ring-red-500",
          "success": "border-green-500 bg-green-50/70 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100/0 dark:text-green-300 dark:focus:border-green-500 dark:focus:ring-green-500"
    },
    "withShadow": {
      "on": "shadow-sm dark:shadow-sm-light",
      "off": ""
    }
  },
  textInput: {
    "base": "flex",
    "addon": "inline-flex items-center rounded-l-md border border-r-0 border-white/30 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-700/30 dark:bg-gray-600 dark:text-gray-400",
    "field": {
      "base": "relative w-full",
      "icon": {
        "base": "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        "svg": "h-5 w-5 text-gray-500 dark:text-gray-400"
      },
      "rightIcon": {
        "base": "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
        "svg": "h-5 w-5 text-gray-500 dark:text-gray-400"
      },
      "input": {
        "base": "block w-full border focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        "sizes": {
          "sm": "p-2 sm:text-xs",
          "md": "p-2.5 text-sm",
          "lg": "p-4 sm:text-base"
        },
        "colors": {
          "gray": "border-gray-300 bg-white/0 text-gray-700 placeholder-gray-500 focus:border-gray-500 focus:ring-gray-100 dark:border-gray-500 dark:bg-gray-700/0 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-gray-800 dark:focus:ring-gray-300 ",
          "failure": "border-red-500 bg-red-50/70 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100/0 dark:text-red-300 dark:focus:border-red-500 dark:focus:ring-red-500",
          "success": "border-green-500 bg-green-50/70 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100/0 dark:text-green-300 dark:focus:border-green-500 dark:focus:ring-green-500"
        },
        "withRightIcon": {
          "on": "pr-10",
          "off": ""
        },
        "withIcon": {
          "on": "pl-10",
          "off": ""
        },
        "withAddon": {
          "on": "rounded-r-lg",
          "off": "rounded-lg"
        },
        "withShadow": {
          "on": "shadow-sm dark:shadow-sm-light",
          "off": ""
        }
      }
    }
  },
  timeline: {
    "root": {
      "direction": {
        "horizontal": "sm:flex md:border-none border-l-2 border-gray-500/20 dark:border-gray-500/50",
        "vertical": "relative border-l border-gray-200/30 dark:border-gray-700/30"
      }
    },
    "item": {
      "root": {
        "horizontal": "relative mb-6 sm:mb-0",
        "vertical": "mb-10 ml-6"
      },
      "content": {
        "root": {
          "base": "p-4 me-0 md:me-4 md:ms-0 ms-3 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-md",
          "horizontal": "mt-3 sm:pr-8",
          "vertical": ""
        },
        "body": {
          "base": "my-4 text-base font-normal text-gray-500 dark:text-gray-400"
        },
        "time": {
          "base": "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
        },
        "title": {
          "base": "text-lg font-semibold text-gray-800 dark:text-gray-200"
        }
      },
      "point": {
        "horizontal": "flex items-center",
        "line": "hidden h-0.5 w-full bg-gray-500/20 sm:flex dark:bg-gray-500/50",
        "marker": {
          "base": {
            "horizontal": "absolute -left-1.5 h-3 w-3 rounded-full border border-white/30 bg-gray-400/50 dark:border-gray-500/30 dark:bg-gray-500/50",
            "vertical": "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white/30 bg-gray-500/50 dark:border-gray-200/30 dark:bg-gray-500/50"
          },
          "icon": {
            "base": "h-3 w-3 text-primary-600 dark:text-primary-300",
            "wrapper": "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-400/50 ring-1 ring-gray-500 dark:bg-gray-500/50 dark:ring-gray-500"
          }
        },
        "vertical": ""
      }
    }
  }
})