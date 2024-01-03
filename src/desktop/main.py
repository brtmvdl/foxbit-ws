import flet

# constants

def routes_names(route, default = ""):
  match route:
    case "/":
      return "Index"
    case "/currencies":
      return "List currencies"
    case "/markets":
      return "List markets"
    case "/banks":
      return "List banks"
    case "/system/time":
      return "Get current time"
    case "/orders":
      return "List orders"
    case _:
      return default

# inputs

class TextInputGroup(flet.Column):
  def __init__(self, text = ""):
    super().__init__()
    self.input = flet.TextField(text)
    self.error = flet.Text("", color = flet.colors.RED)
    self.controls = [self.input, self.error]

class NumberInputGroup(flet.Column):
  def __init__(self, text = ""):
    super().__init__()
    input_filter = flet.InputFilter(allow=True, regex_string=r"[0-9]", replacement_string="")
    self.input = flet.TextField(text, input_filter=input_filter)
    self.error = flet.Text("", color = flet.colors.RED)
    self.controls = [self.input, self.error]

class DateTimeGroup(flet.Column):
  def __init__(self):
    super().__init__()
    self.input = flet.DatePicker()
    self.error = flet.Text("", color = flet.colors.RED)
    self.controls = [self.input, self.error]

class RouteButton(flet.Column):
  def __init__(self, page: flet.Page, route = ""):
    super().__init__()
    self.controls = [flet.ElevatedButton(routes_names(route), on_click = lambda _: page.go(route))]

# views

class Index(flet.View):
  def __init__(self, page: flet.Page):
    super().__init__()
    self.page = page
    self.controls.append(RouteButton(self.page, "/currencies"))

class Currencies(flet.View):
  def __init__(self, page: flet.Page):
    super().__init__()
    self.page = page
    self.controls.append(RouteButton(self.page, "/"))

class Me(flet.View):
  def __init__(self, page: flet.Page):
    super().__init__()
    self.page = page
    self.controls.append(RouteButton(self.page, "/"))

class Orders(flet.View):
  def __init__(self, page: flet.Page):
    super().__init__()
    self.page = page
    self.controls.append(RouteButton(self.page, "/"))

def main(page: flet.Page):
  page.title = "Foxbit WS"

  def get_view(route):
    match route:
      case "/currencies":
        return Currencies(page)
      case "/me":
          return Me(page)
      case "/orders":
          return Orders(page)
      case _:
        return Index(page)

  def route_change(route):
    page.views.clear()
    page.views.append(Index(page))

    if page.route != "/":
      page.views.append(get_view(page.route))
  page.update()

  def view_pop(view):
    page.views.pop()
    top_view = page.views[-1]
    page.go(top_view.route)

  page.on_route_change = route_change
  page.on_view_pop = view_pop
  page.go(page.route)

if __name__ == "__main__":
  flet.app(target=main)
