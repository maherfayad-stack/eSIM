import ColorsStory from './Colors.story'
import TypographyStory from './Typography.story'
import TokensStory from './Tokens.story'
import IconsStory from './Icons.story'
import ButtonStory from './Button.story'
import IconButtonStory from './IconButton.story'
import GlassButtonStory from './GlassButton.story'
import ChipStory from './Chip.story'
import TagStory from './Tag.story'
import SeparatorStory from './Separator.story'
import CellStory from './Cell.story'
import ListItemStory from './ListItem.story'
import CheckboxStory from './Checkbox.story'
import RadioStory from './Radio.story'
import ToggleStory from './Toggle.story'
import SegmentedControlStory from './SegmentedControl.story'
import StepperStory from './Stepper.story'
import ProgressStepperStory from './ProgressStepper.story'
import CircularProgressIndicatorStory from './CircularProgressIndicator.story'
import LinearProgressIndicatorStory from './LinearProgressIndicator.story'
import SliderStory from './Slider.story'
import TextInputStory from './TextInput.story'
import SearchStory from './Search.story'
import BannerStory from './Banner.story'
import SystemBannerStory from './SystemBanner.story'
import VisualCardStory from './VisualCard.story'
import AdBannerStory from './AdBanner.story'
import BottomActionBarStory from './BottomActionBar.story'
import NavbarStory from './Navbar.story'
import CalloutStory from './Callout.story'
import AccoladeStory from './Accolade.story'
import BadgeStory from './Badge.story'
import TooltipStory from './Tooltip.story'
import SnackbarStory from './Snackbar.story'
import TabBarStory from './TabBar.story'
import BottomSheetStory from './BottomSheet.story'
import DialogStory from './Dialog.story'
import ActionSheetStory from './ActionSheet.story'
import MarketingCardStory from './MarketingCard.story'
import ExpanderStory from './Expander.story'
import AccordionStory from './Accordion.story'
import AlmosaferLogoStory from './AlmosaferLogo.story'

const allStories = [
  ColorsStory,
  TypographyStory,
  TokensStory,
  IconsStory,
  AlmosaferLogoStory,
  ButtonStory,
  IconButtonStory,
  GlassButtonStory,
  ChipStory,
  TagStory,
  SeparatorStory,
  CellStory,
  ListItemStory,
  CheckboxStory,
  RadioStory,
  ToggleStory,
  SegmentedControlStory,
  StepperStory,
  ProgressStepperStory,
  CircularProgressIndicatorStory,
  LinearProgressIndicatorStory,
  SliderStory,
  TextInputStory,
  SearchStory,
  BannerStory,
  SystemBannerStory,
  VisualCardStory,
  AdBannerStory,
  BottomActionBarStory,
  NavbarStory,
  CalloutStory,
  AccoladeStory,
  BadgeStory,
  TooltipStory,
  SnackbarStory,
  TabBarStory,
  BottomSheetStory,
  DialogStory,
  ActionSheetStory,
  MarketingCardStory,
  ExpanderStory,
  AccordionStory,
]

export const stories = Object.fromEntries(
  allStories.map(s => [s.title, s])
)

export const storyList = allStories.map(s => ({
  id: s.title,
  title: s.title,
  category: s.category,
}))
