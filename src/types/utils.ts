// Utility types for common patterns

// Make all properties optional
export type Partial<T> = {
	[P in keyof T]?: T[P]
}

// Make all properties required
export type Required<T> = {
	[P in keyof T]-?: T[P]
}

// Pick specific properties
export type Pick<T, K extends keyof T> = {
	[P in K]: T[P]
}

// Omit specific properties
export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

// Extract specific properties
export type Extract<T, U> = T extends U ? T : never

// Exclude specific properties
export type Exclude<T, U> = T extends U ? never : T

// Non-nullable type
export type NonNullable<T> = T extends null | undefined ? never : T

// Return type of a function
export type ReturnType<T extends (...args: any) => any> = T extends (
	...args: any
) => infer R
	? R
	: any

// Parameters of a function
export type Parameters<T extends (...args: any) => any> = T extends (
	...args: infer P
) => any
	? P
	: never

// Instance type of a constructor
export type InstanceType<T extends abstract new (...args: any) => any> =
	T extends abstract new (...args: any) => infer R ? R : any

// Constructor parameters
export type ConstructorParameters<
	T extends abstract new (...args: any) => any
> = T extends abstract new (...args: infer P) => any ? P : never

// Deep partial - makes nested objects optional too
export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// Deep required - makes nested objects required too
export type DeepRequired<T> = {
	[P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P]
}

// Readonly type
export type Readonly<T> = {
	readonly [P in keyof T]: T[P]
}

// Deep readonly - makes nested objects readonly too
export type DeepReadonly<T> = {
	readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

// Record type with specific keys and values
export type Record<K extends keyof any, T> = {
	[P in K]: T
}

// Union to intersection
export type UnionToIntersection<U> = (
	U extends any ? (k: U) => void : never
) extends (k: infer I) => void
	? I
	: never

// Tuple to union
export type TupleToUnion<T extends readonly any[]> = T[number]

// Array element type
export type ArrayElement<T> = T extends readonly (infer U)[] ? U : never

// Promise type
export type PromiseType<T> = T extends Promise<infer U> ? U : T

// Async function return type
export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
	T extends (...args: any) => Promise<infer R> ? R : any

// Function type
export type FunctionType<T = any, R = any> = (...args: T[]) => R

// Event handler type
export type EventHandler<T = Event> = (event: T) => void

// Component props type
export type ComponentProps<T> = T extends React.ComponentType<infer P>
	? P
	: never

// React ref type
export type RefType<T> = T extends React.RefObject<infer R> ? R : T

// CSS properties type
export type CSSProperties = React.CSSProperties

// HTML element types
export type HTMLElementTagNameMap = {
	div: HTMLDivElement
	span: HTMLSpanElement
	button: HTMLButtonElement
	input: HTMLInputElement
	textarea: HTMLTextAreaElement
	select: HTMLSelectElement
	form: HTMLFormElement
	a: HTMLAnchorElement
	img: HTMLImageElement
	video: HTMLVideoElement
	audio: HTMLAudioElement
	canvas: HTMLCanvasElement
	svg: SVGSVGElement
}

// Event target type
export type EventTarget<T extends keyof HTMLElementTagNameMap> =
	HTMLElementTagNameMap[T]

// Form event type
export type FormEvent<T = HTMLFormElement> = React.FormEvent<T>

// Change event type
export type ChangeEvent<T = HTMLInputElement> = React.ChangeEvent<T>

// Click event type
export type ClickEvent<T = HTMLButtonElement> = React.MouseEvent<T>

// Keyboard event type
export type KeyboardEvent<T = HTMLInputElement> = React.KeyboardEvent<T>

// Focus event type
export type FocusEvent<T = HTMLInputElement> = React.FocusEvent<T>

// Blur event type
export type BlurEvent<T = HTMLInputElement> = React.FocusEvent<T>

// Submit event type
export type SubmitEvent<T = HTMLFormElement> = React.FormEvent<T>

// Drag event type
export type DragEvent<T = HTMLDivElement> = React.DragEvent<T>

// Wheel event type
export type WheelEvent<T = HTMLDivElement> = React.WheelEvent<T>

// Touch event type
export type TouchEvent<T = HTMLDivElement> = React.TouchEvent<T>

// Pointer event type
export type PointerEvent<T = HTMLDivElement> = React.PointerEvent<T>

// Animation event type
export type AnimationEvent<T = HTMLDivElement> = React.AnimationEvent<T>

// Transition event type
export type TransitionEvent<T = HTMLDivElement> = React.TransitionEvent<T>

// Clipboard event type
export type ClipboardEvent<T = HTMLInputElement> = React.ClipboardEvent<T>

// Composition event type
export type CompositionEvent<T = HTMLInputElement> = React.CompositionEvent<T>

// Input event type
export type InputEvent<T = HTMLInputElement> = React.FormEvent<T>

// Invalid event type
export type InvalidEvent<T = HTMLInputElement> = React.FormEvent<T>

// Reset event type
export type ResetEvent<T = HTMLFormElement> = React.FormEvent<T>

// Search event type
export type SearchEvent<T = HTMLInputElement> = React.FormEvent<T>

// Select event type
export type SelectEvent<T = HTMLSelectElement> = React.FormEvent<T>

// BeforeInput event type
export type BeforeInputEvent<T = HTMLInputElement> = React.FormEvent<T>

// Error event type
export type ErrorEvent<T = HTMLImageElement> = React.SyntheticEvent<T, Event>

// Load event type
export type LoadEvent<T = HTMLImageElement> = React.SyntheticEvent<T, Event>

// Abort event type
export type AbortEvent<T = HTMLImageElement> = React.SyntheticEvent<T, Event>

// CanPlay event type
export type CanPlayEvent<T = HTMLVideoElement> = React.SyntheticEvent<T, Event>

// CanPlayThrough event type
export type CanPlayThroughEvent<T = HTMLVideoElement> = React.SyntheticEvent<
	T,
	Event
>

// DurationChange event type
export type DurationChangeEvent<T = HTMLVideoElement> = React.SyntheticEvent<
	T,
	Event
>

// Emptied event type
export type EmptiedEvent<T = HTMLVideoElement> = React.SyntheticEvent<T, Event>

// Encrypted event type
export type EncryptedEvent<T = HTMLVideoElement> = React.SyntheticEvent<
	T,
	Event
>

// Ended event type
export type EndedEvent<T = HTMLVideoElement> = React.SyntheticEvent<T, Event>

// LoadedData event type
export type LoadedDataEvent<T = HTMLVideoElement> = React.SyntheticEvent<
	T,
	Event
>

// LoadedMetadata event type
export type LoadedMetadataEvent<T = HTMLVideoElement> = React.SyntheticEvent<
	T,
	Event
>

// LoadStart event type
export type LoadStartEvent<T = HTMLVideoElement> = React.SyntheticEvent<
	T,
	Event
>

// Pause event type
export type PauseEvent<T = HTMLVideoElement> = React.SyntheticEvent<T, Event>

// Play event type
export type PlayEvent<T = HTMLVideoElement> = React.SyntheticEvent<T, Event>

// Playing event type
export type PlayingEvent<T = HTMLVideoElement> = React.SyntheticEvent<T, Event>

// Progress event type
export type ProgressEvent<T = HTMLVideoElement> = React.SyntheticEvent<T, Event>

// RateChange event type
export type RateChangeEvent<T = HTMLVideoElement> = React.SyntheticEvent<
	T,
	Event
>

// Seeked event type
export type SeekedEvent<T = HTMLVideoElement> = React.SyntheticEvent<T, Event>

// Seeking event type
export type SeekingEvent<T = HTMLVideoElement> = React.SyntheticEvent<T, Event>

// Stalled event type
export type StalledEvent<T = HTMLVideoElement> = React.SyntheticEvent<T, Event>

// Suspend event type
export type SuspendEvent<T = HTMLVideoElement> = React.SyntheticEvent<T, Event>

// TimeUpdate event type
export type TimeUpdateEvent<T = HTMLVideoElement> = React.SyntheticEvent<
	T,
	Event
>

// VolumeChange event type
export type VolumeChangeEvent<T = HTMLVideoElement> = React.SyntheticEvent<
	T,
	Event
>

// Waiting event type
export type WaitingEvent<T = HTMLVideoElement> = React.SyntheticEvent<T, Event>
