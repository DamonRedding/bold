import * as Components from './'

export type Icons =
  | 'adjust'
  | 'alignCenter'
  | 'alignJustify'
  | 'alignLeft'
  | 'alignRight'
  | 'angleDoubleLeft'
  | 'angleDoubleRight'
  | 'angleDown'
  | 'angleLeft'
  | 'angleRight'
  | 'angleUp'
  | 'archiveFilled'
  | 'archiveOutline'
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUp'
  | 'balanceFilled'
  | 'balanceOutline'
  | 'bandaidFilled'
  | 'bandaidOutline'
  | 'banFilled'
  | 'banOutline'
  | 'batteryFull'
  | 'batteryLow'
  | 'batteryMedium'
  | 'beach'
  | 'bellFilled'
  | 'bellOutline'
  | 'bloodPressureFilled'
  | 'bloodPressureOutline'
  | 'bold'
  | 'bookmarkFilled'
  | 'bookmarkOutline'
  | 'boxFilled'
  | 'boxOutline'
  | 'braille'
  | 'bricksFilled'
  | 'bricksOutline'
  | 'bridge'
  | 'calendarFilled'
  | 'calendarOutline'
  | 'cameraFilled'
  | 'cameraOutline'
  | 'chatFilled'
  | 'chatOutline'
  | 'checkCircleFilled'
  | 'checkCircleOutline'
  | 'checkDefault'
  | 'clearFormat'
  | 'clip'
  | 'clockFilled'
  | 'clockOutline'
  | 'cloudFilled'
  | 'cloudOutline'
  | 'code'
  | 'contrast'
  | 'contrastActive'
  | 'copyFilled'
  | 'copyOutline'
  | 'creditCardFilled'
  | 'creditCardOutline'
  | 'dataFilled'
  | 'dataOutline'
  | 'deaf'
  | 'decreaseFont'
  | 'desktopFilled'
  | 'desktopOutline'
  | 'dogLeashed'
  | 'dots'
  | 'download'
  | 'dropFilled'
  | 'dropOutline'
  | 'emailFilled'
  | 'emailOutline'
  | 'exchange'
  | 'exclamationDefault'
  | 'exclamationTriangleFilled'
  | 'exclamationTriangleOutline'
  | 'expand'
  | 'eyeFilled'
  | 'eyeHiddenFilled'
  | 'eyeHiddenOutline'
  | 'eyeOutline'
  | 'faucetFilled'
  | 'faucetOutline'
  | 'fileEmptyFilled'
  | 'fileEmptyOutline'
  | 'fileWithItensFilled'
  | 'fileWithItensOutline'
  | 'filterFilled'
  | 'filterOutline'
  | 'folderFilled'
  | 'folderOutline'
  | 'gearFilled'
  | 'gearOutline'
  | 'hamburguerMenu'
  | 'heartFilled'
  | 'heartOutline'
  | 'heartRateFilled'
  | 'heartRateOutline'
  | 'hospital'
  | 'houseFilled'
  | 'houseOutline'
  | 'imageFilled'
  | 'imageOutline'
  | 'imcFilled'
  | 'increaseFont'
  | 'infoCircleFilled'
  | 'infoCircleOutline'
  | 'infoDefault'
  | 'italic'
  | 'keyFilled'
  | 'keyOutline'
  | 'lightbulbFilled'
  | 'lightbulbOutline'
  | 'link'
  | 'list'
  | 'lockCloseFilled'
  | 'lockCloseOutline'
  | 'lockOpenFilled'
  | 'lockOpenOutline'
  | 'mapFilled'
  | 'mapMarkerFilled'
  | 'mapMarkerOutline'
  | 'mapOutline'
  | 'medicineBottleFilled'
  | 'medicineBottleOutline'
  | 'microphoneFilled'
  | 'microphoneOutline'
  | 'minimize'
  | 'minus'
  | 'module'
  | 'multipleUsers'
  | 'needleFilled'
  | 'needleOutline'
  | 'nurseOutline'
  | 'nurseVisualizationOutline'
  | 'o2Filled'
  | 'openDoor'
  | 'pause'
  | 'penFilled'
  | 'penOutline'
  | 'penTool'
  | 'petFilled'
  | 'petOutline'
  | 'phoneFilled'
  | 'phoneOutline'
  | 'pillFilled'
  | 'pillOutline'
  | 'pipeFilled'
  | 'pipeOutline'
  | 'playFilled'
  | 'playOutline'
  | 'plus'
  | 'pollFilled'
  | 'pollOutline'
  | 'presentationFilled'
  | 'presentationOutline'
  | 'printerFilled'
  | 'printerOutline'
  | 'questionMarkFilled'
  | 'questionMarkOutline'
  | 'quoteLeft'
  | 'quoteRight'
  | 'redo'
  | 'roadFilled'
  | 'roadOutline'
  | 'rocket'
  | 'rulerFilled'
  | 'rulerOutline'
  | 'shieldFilled'
  | 'shieldOutline'
  | 'signLanguage'
  | 'signOut'
  | 'sort'
  | 'starFilled'
  | 'starOutline'
  | 'stethoscopeFilled'
  | 'stethoscopeOutline'
  | 'stopFilled'
  | 'stopOutline'
  | 'strikethrough'
  | 'sync'
  | 'thermometerFilled'
  | 'thermometerOutline'
  | 'timerFilled'
  | 'timerOutlined'
  | 'timesDefault'
  | 'timesFilled'
  | 'timesOutline'
  | 'trashFilled'
  | 'trashOutline'
  | 'underline'
  | 'undo'
  | 'universalAccess'
  | 'upload'
  | 'userBan'
  | 'userCard'
  | 'userCheck'
  | 'userFilled'
  | 'userOutline'
  | 'userTimes'
  | 'videoFilled'
  | 'videoOutline'
  | 'volumeFilled'
  | 'volumeMuteFilled'
  | 'volumeMuteOutline'
  | 'volumeOutline'
  | 'walker'
  | 'wheelchair'
  | 'wifi'
  | 'xp'
  | 'zoomMinusFilled'
  | 'zoomMinusOutline'
  | 'zoomOutline'
  | 'zoomPlusFilled'
  | 'zoomPlusOutline'

export const IconMap: {
  [key in Icons]: React.ComponentType<React.SVGProps<SVGSVGElement>>
} = {
  adjust: Components.Adjust,
  alignCenter: Components.AlignCenter,
  alignJustify: Components.AlignJustify,
  alignLeft: Components.AlignLeft,
  alignRight: Components.AlignRight,
  angleDoubleLeft: Components.AngleDoubleLeft,
  angleDoubleRight: Components.AngleDoubleRight,
  angleDown: Components.AngleDown,
  angleLeft: Components.AngleLeft,
  angleRight: Components.AngleRight,
  angleUp: Components.AngleUp,
  archiveFilled: Components.ArchiveFilled,
  archiveOutline: Components.ArchiveOutline,
  arrowDown: Components.ArrowDown,
  arrowLeft: Components.ArrowLeft,
  arrowRight: Components.ArrowRight,
  arrowUp: Components.ArrowUp,
  balanceFilled: Components.BalanceFilled,
  balanceOutline: Components.BalanceOutline,
  bandaidFilled: Components.BandaidFilled,
  bandaidOutline: Components.BandaidOutline,
  banFilled: Components.BanFilled,
  banOutline: Components.BanOutline,
  batteryFull: Components.BatteryFull,
  batteryLow: Components.BatteryLow,
  batteryMedium: Components.BatteryMedium,
  beach: Components.Beach,
  bellFilled: Components.BellFilled,
  bellOutline: Components.BellOutline,
  bloodPressureFilled: Components.BloodPressureFilled,
  bloodPressureOutline: Components.BloodPressureOutline,
  bold: Components.Bold,
  bookmarkFilled: Components.BookmarkFilled,
  bookmarkOutline: Components.BookmarkOutline,
  boxFilled: Components.BoxFilled,
  boxOutline: Components.BoxOutline,
  braille: Components.Braille,
  bricksFilled: Components.BricksFilled,
  bricksOutline: Components.BricksOutline,
  bridge: Components.Bridge,
  calendarFilled: Components.CalendarFilled,
  calendarOutline: Components.CalendarOutline,
  cameraFilled: Components.CameraFilled,
  cameraOutline: Components.CameraOutline,
  chatFilled: Components.ChatFilled,
  chatOutline: Components.ChatOutline,
  checkCircleFilled: Components.CheckCircleFilled,
  checkCircleOutline: Components.CheckCircleOutline,
  checkDefault: Components.CheckDefault,
  clearFormat: Components.ClearFormat,
  clip: Components.Clip,
  clockFilled: Components.ClockFilled,
  clockOutline: Components.ClockOutline,
  cloudFilled: Components.CloudFilled,
  cloudOutline: Components.CloudOutline,
  code: Components.Code,
  contrast: Components.Contrast,
  contrastActive: Components.ContrastActive,
  copyFilled: Components.CopyFilled,
  copyOutline: Components.CopyOutline,
  creditCardFilled: Components.CreditCardFilled,
  creditCardOutline: Components.CreditCardOutline,
  dataFilled: Components.DataFilled,
  dataOutline: Components.DataOutline,
  deaf: Components.Deaf,
  decreaseFont: Components.DecreaseFont,
  desktopFilled: Components.DesktopFilled,
  desktopOutline: Components.DesktopOutline,
  dogLeashed: Components.DogLeashed,
  dots: Components.Dots,
  download: Components.Download,
  dropFilled: Components.DropFilled,
  dropOutline: Components.DropOutline,
  emailFilled: Components.EmailFilled,
  emailOutline: Components.EmailOutline,
  exchange: Components.Exchange,
  exclamationDefault: Components.ExclamationDefault,
  exclamationTriangleFilled: Components.ExclamationTriangleFilled,
  exclamationTriangleOutline: Components.ExclamationTriangleOutline,
  expand: Components.Expand,
  eyeFilled: Components.EyeFilled,
  eyeHiddenFilled: Components.EyeHiddenFilled,
  eyeHiddenOutline: Components.EyeHiddenOutline,
  eyeOutline: Components.EyeOutline,
  faucetFilled: Components.FaucetFilled,
  faucetOutline: Components.FaucetOutline,
  fileEmptyFilled: Components.FileEmptyFilled,
  fileEmptyOutline: Components.FileEmptyOutline,
  fileWithItensFilled: Components.FileWithItensFilled,
  fileWithItensOutline: Components.FileWithItensOutline,
  filterFilled: Components.FilterFilled,
  filterOutline: Components.FilterOutline,
  folderFilled: Components.FolderFilled,
  folderOutline: Components.FolderOutline,
  gearFilled: Components.GearFilled,
  gearOutline: Components.GearOutline,
  hamburguerMenu: Components.HamburguerMenu,
  heartFilled: Components.HeartFilled,
  heartOutline: Components.HeartOutline,
  heartRateFilled: Components.HeartRateFilled,
  heartRateOutline: Components.HeartRateOutline,
  hospital: Components.Hospital,
  houseFilled: Components.HouseFilled,
  houseOutline: Components.HouseOutline,
  imageFilled: Components.ImageFilled,
  imageOutline: Components.ImageOutline,
  imcFilled: Components.ImcFilled,
  increaseFont: Components.IncreaseFont,
  infoCircleFilled: Components.InfoCircleFilled,
  infoCircleOutline: Components.InfoCircleOutline,
  infoDefault: Components.InfoDefault,
  italic: Components.Italic,
  keyFilled: Components.KeyFilled,
  keyOutline: Components.KeyOutline,
  lightbulbFilled: Components.LightbulbFilled,
  lightbulbOutline: Components.LightbulbOutline,
  link: Components.Link,
  list: Components.List,
  lockCloseFilled: Components.LockCloseFilled,
  lockCloseOutline: Components.LockCloseOutline,
  lockOpenFilled: Components.LockOpenFilled,
  lockOpenOutline: Components.LockOpenOutline,
  mapFilled: Components.MapFilled,
  mapMarkerFilled: Components.MapMarkerFilled,
  mapMarkerOutline: Components.MapMarkerOutline,
  mapOutline: Components.MapOutline,
  medicineBottleFilled: Components.MedicineBottleFilled,
  medicineBottleOutline: Components.MedicineBottleOutline,
  microphoneFilled: Components.MicrophoneFilled,
  microphoneOutline: Components.MicrophoneOutline,
  minimize: Components.Minimize,
  minus: Components.Minus,
  module: Components.Module,
  multipleUsers: Components.MultipleUsers,
  needleFilled: Components.NeedleFilled,
  needleOutline: Components.NeedleOutline,
  nurseOutline: Components.NurseOutline,
  nurseVisualizationOutline: Components.NurseVisualizationOutline,
  o2Filled: Components.O2Filled,
  openDoor: Components.OpenDoor,
  pause: Components.Pause,
  penFilled: Components.PenFilled,
  penOutline: Components.PenOutline,
  penTool: Components.PenTool,
  petFilled: Components.PetFilled,
  petOutline: Components.PetOutline,
  phoneFilled: Components.PhoneFilled,
  phoneOutline: Components.PhoneOutline,
  pillFilled: Components.PillFilled,
  pillOutline: Components.PillOutline,
  pipeFilled: Components.PipeFilled,
  pipeOutline: Components.PipeOutline,
  playFilled: Components.PlayFilled,
  playOutline: Components.PlayOutline,
  plus: Components.Plus,
  pollFilled: Components.PollFilled,
  pollOutline: Components.PollOutline,
  presentationFilled: Components.PresentationFilled,
  presentationOutline: Components.PresentationOutline,
  printerFilled: Components.PrinterFilled,
  printerOutline: Components.PrinterOutline,
  questionMarkFilled: Components.QuestionMarkFilled,
  questionMarkOutline: Components.QuestionMarkOutline,
  quoteLeft: Components.QuoteLeft,
  quoteRight: Components.QuoteRight,
  redo: Components.Redo,
  roadFilled: Components.RoadFilled,
  roadOutline: Components.RoadOutline,
  rocket: Components.Rocket,
  rulerFilled: Components.RulerFilled,
  rulerOutline: Components.RulerOutline,
  shieldFilled: Components.ShieldFilled,
  shieldOutline: Components.ShieldOutline,
  signLanguage: Components.SignLanguage,
  signOut: Components.SignOut,
  sort: Components.Sort,
  starFilled: Components.StarFilled,
  starOutline: Components.StarOutline,
  stethoscopeFilled: Components.StethoscopeFilled,
  stethoscopeOutline: Components.StethoscopeOutline,
  stopFilled: Components.StopFilled,
  stopOutline: Components.StopOutline,
  strikethrough: Components.Strikethrough,
  sync: Components.Sync,
  thermometerFilled: Components.ThermometerFilled,
  thermometerOutline: Components.ThermometerOutline,
  timerFilled: Components.TimerFilled,
  timerOutlined: Components.TimerOutlined,
  timesDefault: Components.TimesDefault,
  timesFilled: Components.TimesFilled,
  timesOutline: Components.TimesOutline,
  trashFilled: Components.TrashFilled,
  trashOutline: Components.TrashOutline,
  underline: Components.Underline,
  undo: Components.Undo,
  universalAccess: Components.UniversalAccess,
  upload: Components.Upload,
  userBan: Components.UserBan,
  userCard: Components.UserCard,
  userCheck: Components.UserCheck,
  userFilled: Components.UserFilled,
  userOutline: Components.UserOutline,
  userTimes: Components.UserTimes,
  videoFilled: Components.VideoFilled,
  videoOutline: Components.VideoOutline,
  volumeFilled: Components.VolumeFilled,
  volumeMuteFilled: Components.VolumeMuteFilled,
  volumeMuteOutline: Components.VolumeMuteOutline,
  volumeOutline: Components.VolumeOutline,
  walker: Components.Walker,
  wheelchair: Components.Wheelchair,
  wifi: Components.Wifi,
  xp: Components.Xp,
  zoomMinusFilled: Components.ZoomMinusFilled,
  zoomMinusOutline: Components.ZoomMinusOutline,
  zoomOutline: Components.ZoomOutline,
  zoomPlusFilled: Components.ZoomPlusFilled,
  zoomPlusOutline: Components.ZoomPlusOutline,
}