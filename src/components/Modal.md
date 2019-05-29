```jsx
import Span from './Span';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dom } from '@fortawesome/fontawesome-svg-core';
import {
	faCalendarAlt,
	faTimesCircle,
	faFileAlt,
	faRulerVertical,
} from '@fortawesome/free-solid-svg-icons';
dom.watch();
<div>
	<Modal id="modalDialog">
		<aside>
			<FontAwesomeIcon
				className="iconTimesCircle"
				icon={faTimesCircle}
				type="button"
				onClick={() => modalDialog.close()}
			/>
		</aside>
		<header>
			<Span size="large" weight="bold">
				TITLE
			</Span>
			<Span weight="lighter"> Label informations</Span>
		</header>
		<main>
			<form id="toto" method="dialog">
				<Span color="nevada" weight="bold">
					Date
				</Span>
				<br />
				<label htmlFor="from">De</label>
				<input type="date" id="from" name="from" />
				<FontAwesomeIcon
					className="iconCalendarAlt"
					icon={faCalendarAlt}
					style={{ paddingRight: '1.7rem' }}
				/>
				<label htmlFor="to">À</label>
				<input type="date" name="to" id="to" />
				<FontAwesomeIcon
					className="iconCalendarAlt"
					icon={faCalendarAlt}
					style={{ paddingRight: '1.7rem' }}
				/>
				<br />
				<Span
					weight="lighter"
					style={{ display: 'flex', justifyContent: 'center', paddingTop: '0.75rem' }}
				>
					Choisissez les éléments à exporter
				</Span>
				<details>
					<summary>
						<FontAwesomeIcon
							className="iconRulerVertical"
							icon={faRulerVertical}
							style={{ paddingRight: '0.5rem' }}
						/>
						<Span>Mesures</Span>
					</summary>
					<input type="checkbox" name="bloodPressure" />
					<label htmlFor="LOINC_BLOOD_PRESSURE_CODE">Tension</label>
					<input type="checkbox" name="weight" />
					<label htmlFor="LOINC_BODY_WEIGHT_CODE">Poids</label>
					<input type="checkbox" name="temperature" />
					<label htmlFor="LOINC_BODY_TEMPERATURE_CODE">Température</label>
					<input type="checkbox" name="bloodGlucose" />
					<label htmlFor="LOINC_BLOOD_GLUCOSE_CODE">Glycémie</label>
					<input type="checkbox" name="height" />
					<label htmlFor="LOINC_BODY_HEIGHT_CODE">Taille</label>
					<input type="checkbox" name="waistSize" />
					<label htmlFor="LOINC_WAIST_SIZE_CODE">Tour de taille</label>
					<input type="checkbox" name="hearthRate" />
					<label htmlFor="LOINC_HEART_RATE_CODE">Pouls</label>
					<input type="checkbox" name="respiratoryRate" />
					<label htmlFor="LOINC_RESPIRATORY_RATE_CODE">Fréquence respiratoire</label>
				</details>
				<details>
					<summary>
						<FontAwesomeIcon
							className="iconFileAlt"
							icon={faFileAlt}
							style={{ paddingRight: '0.5rem' }}
						/>
						<Span>Documents</Span>
					</summary>
				</details>
			</form>
		</main>
		<footer>
			<Button form="toto" type="submit" variant="outline" style={{ marginRight: '.5rem' }}>
				exporter
			</Button>
		</footer>
	</Modal>
	<button onClick={() => modalDialog.showModal()}>Open modal</button>
</div>;
```
