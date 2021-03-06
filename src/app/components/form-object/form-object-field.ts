/**
 * Structure of a dynamic form field, used to generate forms to edit objects.
 *
 * Some type of field might require additional parameters specified in their documentation.
 */
export class FormObjectField {
	/**
	 * Type of the field (number, text, etc).
	 */
	public type: number;

	/**
	 * Name of the object attribute to edit.
	 *
	 * Attribute names can indicate nested objects (e.g. a:{b:{c:2}} the c value can be accessed as "a.b.c").
	 */
	public attribute: string;

	/**
	 * Required should be indicated if the field if obligatory.
	 */
	public required?: boolean = false;

	/**
	 * Label to be presented, if none present the attribute is used as label.
	 */
	public label?: string;

	/**
	 * If the fields is not editable its value will only be displayed.
	 */
	public editable?: boolean = true;

	/**
	 * List of options required for some type of fields.
	 */
	public options?: any[];

	/**
	 * Method called when an attribute is changed, receives (object, attribute, oldValue, newValue) parameters.
	 */
	public onChange?: Function;
}
