<template>
  <div class="">
    <GroupBox v-if="1" title="" class="">
      <div class="grid grid-cols-1 gap-2">
        <div class="col-span-1">
          <InputText v-model="mAlias" input-name="alias" label="Nombre o alias" required />
        </div>
        <div class="col-span-1">
          <InputText v-model="mCity" input-name="city" label="Población/Ciudad" required />
        </div>
        <div class="col-span-1">
          <InputText v-model="mAddress" input-name="address" label="Dirección" required />
        </div>
      </div>
    </GroupBox>

    <template v-if="0">
      <h2 v-if="1" class="font-Header mt-6">Anuncio</h2>
      <InputAmount european v-model="mAskingPriceStr" input-name="asking_price" label="Precio de salida"  @update:asfloat="(newValue) => mAskingPrice = newValue" />
      <InputText v-model="mUrl" input-name="url" label="Url del anuncio" />
      <InputText v-model="mUrlPhoto" input-name="url_photo" label="URL de una foto" />
    </template>

    <GroupBox v-if="1" title="Gastos de compra" class="mt-6 border-b-0">
      <div class="grid grid-cols-12 gap-2">
          <div class="col-start-7 col-span-6">
            <InputAmount european v-model="mPurchasePrice" input-name="purchase_price" label="Precio de compra" />
          </div>
          <div class="col-start-4 col-span-3">
            <InputAmount european v-model="mPurchaseTaxPerc" input-name="purchase_tax_perc" label="ITP %"  @update:modelValue="updatePurchaseTaxPerc" />
          </div>
          <div class="col-span-6">
            <InputAmount european v-model="cPurchaseTax" input-name="purchase_tax" label="ITP" disabled />
          </div>
        </div>

        <div class="my-6 border-stone-200 border-b" />

        <div class="grid grid-cols-12 gap-2">
          <div class="col-span-4">
            <InputAmount european v-model="mPurchaseNotary" input-name="purchase_notary" label="Notaría" />
            </div>
          <div class="col-span-4">
            <InputAmount european v-model="mPurchaseRegistry" input-name="purchase_registry" label="Registro" />
          </div>
          <div class="col-span-4">
            <InputAmount european v-model="mPurchaseAgentFee" input-name="purchase_agent_fee" label="Inmobiliaria" />
          </div>
        </div>

        <!--
        <div class="my-6 border-stone-200 border-b" />

        <div class="grid grid-cols-12 gap-2">
          <div class="col-start-7 col-span-6">
            <InputAmount european v-model="cPurchaseSubtotal" input-name="purchase_subtotal" label="Precio final" disabled />
          </div>
        </div>
        -->
    </GroupBox>

    <GroupBox v-if="1" title="Gastos de hipoteca" class="mt-6">
      <div class="grid grid-cols-12 gap-2">
        <div class="col-start-4 col-span-3">
          <InputAmount european v-model="mMortgagePerc" input-name="mortgage_perc" label="Importe %"  @update:modelValue="updateMortgagePerc" />
        </div>
        <div class="col-span-6">
          <InputAmount european v-model="cMortgageAmount" input-name="mortgage_amount" label="Importe" disabled />
        </div>
        <div class="col-start-4 col-span-3">
          <InputAmount european v-model="mMortgageYears" :mindigits="0" :maxdigits="0" input-name="mortgage_years" label="Plazo años" />
        </div>
        <div class="col-span-3">
          <InputAmount european v-model="cMortgageMonths" :mindigits="0" :maxdigits="0" input-name="mortgage_months" label="Meses" disabled />
        </div>
        <div class="col-span-3">
          <InputAmount european v-model="mMortgageInterest" input-name="mortgage_interest" label="Interés %" />
        </div>
      </div>

      <div class="my-6 border-stone-200 border-b" />

      <div class="grid grid-cols-12 gap-2">
        <div class="col-start-5 col-span-4">
          <InputAmount european v-model="cMortgagePayments.monthlyPayment" input-name="mortgage_payment_m" label="Letra mensual" disabled />
        </div>
        <div class="col-span-4">
          <InputAmount european v-model="cMortgagePayments.yearlyPayment" input-name="mortgage_payment_y" label="Anual" disabled />
        </div>
        <div class="col-start-5 col-span-4">
          <InputAmount european v-model="cMortgagePayments.avgMonthlyPrincipal" input-name="mortgage_principal_m" label="Cap. mensual" disabled />
        </div>
        <div class="col-span-4">
          <InputAmount european v-model="cMortgagePayments.avgYearlyPrincipal" input-name="mortgage_principal_y" label="Anual" disabled />
        </div>
        <div class="col-start-5 col-span-4">
          <InputAmount european v-model="cMortgagePayments.avgMonthlyInterest" input-name="mortgage_principal_m" label="Int. mensual" disabled />
        </div>
        <div class="col-span-4">
          <InputAmount european v-model="cMortgagePayments.avgYearlyInterest" input-name="mortgage_principal_y" label="Anual" disabled />
        </div>
      </div>

      <div class="my-6 border-stone-200 border-b" />

      <div class="grid grid-cols-3 gap-2">
        <div class="col-span-1">
          <InputAmount european v-model="mMortgageOriginationFee" input-name="mortgage_origin" label="Com. apertura" />
        </div>
        <div class="col-span-1">
          <InputAmount european v-model="mMortgageNotary" input-name="mortgage_notary" label="Notaría" />
        </div>
        <div class="col-span-1">
          <InputAmount european v-model="mMortgageRegistry" input-name="mortgage_registry" label="Registro" />
        </div>
        <div class="col-span-1">
          <InputAmount european v-model="mMortgageTaxes" input-name="mortgage_taxes" label="IAJD" />
        </div>
        <div class="col-span-1">
          <InputAmount european v-model="mMortgageAppraisal" input-name="mortgage_appraisal" label="Tasación" />
        </div>
        <div class="col-span-1">
          <InputAmount european v-model="mMortgageAdmin" input-name="mortgage_admin" label="Gestoría" />
        </div>
        <div class="col-span-1">
          <InputAmount european v-model="mMortgageBrokerFee" input-name="mortgage_broker" label="Com. broker" />
        </div>
      </div>

      <!--
      <div class="my-6 border-stone-200 border-b" />

      <div class="grid grid-cols-2 gap-2">
        <div class="col-start-2 col-span-1">
          <InputAmount european v-model="cPurchaseWithMortgage" input-name="mortgage_subtotal" label="Precio con hipoteca" disabled />
        </div>
      </div>
    -->
    </GroupBox>

    <GroupBox v-if="1" title="Gastos extra" class="mt-6">
      <div class="grid grid-cols-12 gap-2">
          <div class="col-start-5 col-span-4">
            <InputAmount european v-model="mRenewal" input-name="renewal" label="Reforma" />
          </div>
          <div class="col-span-4">
            <InputAmount european v-model="mFurniture" input-name="furniture" label="Muebles" />
          </div>
        </div>
    </GroupBox>

    <GroupBox v-if="1" title="Resumen compra" class="mt-6">
      <div class="grid grid-cols-2 gap-2">
        <div class="col-start-2 col-span-1">
          <InputAmount european v-model="mPurchasePrice" input-name="summary1" label="Precio inicial" disabled />
        </div>
        <div class="col-span-1">
          <InputAmount european v-model="cTotalCosts" input-name="summary2" label="+ Total gastos" disabled />
        </div>
        <div class="col-start-2 col-span-1">
          <InputAmount european v-model="cPurchaseWithRenewal" input-name="summary3" label="= Precio final" disabled />
        </div>
        <div class="col-span-1">
          <InputAmount european v-model="cDownpayment" input-name="downpayment" label="Capital propio" disabled />
        </div>
        <div class="col-span-1">
          <InputAmount european v-model="cMortgageAmount" input-name="mortgage_amount" label="Hipoteca" disabled />
        </div>
      </div>
    </GroupBox>

    <GroupBox v-if="1" title="Gastos recurrentes fijos" class="mt-6">
      <div class="grid grid-cols-3 gap-2">
        <div class="col-start-3 col-span-1">
          <InputAmount european v-model="mFixedCostPropertyTax" input-name="costs_prop_tax" label="IBI" />
        </div>
        <div class="col-start-2 col-span-1">
          <InputAmount european v-model="mFixedCostServiceFeeMonth" input-name="costs_service_fee_m" label="Comunidad mens." />
        </div>
        <div class="col-span-1">
          <InputAmount european v-model="cFixedCostServiceFeeYear" input-name="costs_service_fee_y" label="Anual" disabled />
        </div>
        <div class="col-start-3 col-span-1">
          <InputAmount european v-model="mFixedCostHomeInsurance" input-name="costs_home_ins" label="Seguro hogar" />
        </div>
        <div class="col-start-3 col-span-1">
          <InputAmount european v-model="mFixedCostLifeInsurance" input-name="costs_life_ins" label="Seguro vida" />
        </div>
        <div class="col-start-3 col-span-1">
          <InputAmount european v-model="mFixedCostMaintenance" input-name="costs_maintenance" label="Mantenimiento" />
        </div>
        <div class="col-start-3 col-span-1">
          <InputAmount european v-model="mFixedCostOthers" input-name="costs_others" label="Otros" />
        </div>
      </div>

      <div class="my-6 border-stone-200 border-b" />

      <div class="grid grid-cols-3 gap-2">
        <div class="col-start-2 col-span-1">
          <InputAmount european v-model="cFixedCostsMonth" input-name="fixed_costs" label="Mensuales" disabled />
        </div>
        <div class="col-span-1">
          <InputAmount european v-model="cFixedCosts" input-name="fixed_costs" label="Anuales" disabled />
        </div>
      </div>
    </GroupBox>

    <div class="mt-6 px-2">
      <Alert level="info" class="my-2">
        De momento, tienes que conseguir sacarle a la propiedad más de <b>{{ (cFixedCostsMonth + cMortgagePayments.monthlyPayment).toFixed(2) }} euros/mes</b> brutos para no perder dinero (esto es, tener un cash flow positivo).
        <span v-if="mMortgagePerc > 0.0">
            <br/>
            Cuando termines de pagar la hipoteca esta cifra bajaría a {{ (cFixedCostsMonth).toFixed(2) }} euros/mes.</span>
      </Alert>
    </div>

    <div class="mt-6 px-2">
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" v-model="mRentType" name="tipo_alquiler1" value="rentTypeLong" id="rentTypeLong" class="h-4 w-4 mr-2 cursor-pointer sr-only peer" />
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ms-2 text-gray-900 dark:text-gray-300">Alquiler de larga estancia</span>
      </label>
    </div>

    <template v-if="cRentTypeLongSelected">
      <GroupBox title="Larga estancia - Gastos" class="mt-6">
        <div class="grid grid-cols-1 gap-2">
          ¡Illo illo illo!
        </div>
      </GroupBox>
  
      <GroupBox title="Larga estancia - Ingresos" class="mt-6">
        <div class="grid grid-cols-1 gap-2">
          ¡Illo illo illo!
        </div>
      </GroupBox>
    </template>

    <div class="mt-6 px-2">
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" v-model="mRentType" name="tipo_alquiler2" value="rentTypeShort" id="rentTypeShort" class="h-4 w-4 mr-2 cursor-pointer sr-only peer" />
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ms-2 text-gray-900 dark:text-gray-300">Alquiler vacacional</span>
      </label>
    </div>

    <template v-if="cRentTypeShortSelected">
      <GroupBox title="Vacacional - Gastos" class="mt-6">
        <div class="grid grid-cols-1 gap-2">
          ¡Illo illo illo!
        </div>
      </GroupBox>
  
      <GroupBox title="Vacacional - Ingresos" class="mt-6">
        <div class="grid grid-cols-1 gap-2">
          ¡Illo illo illo!
        </div>
      </GroupBox>
    </template>

    <div class="mt-6 px-2">
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" v-model="mRentType" name="tipo_alquiler3" value="rentTypeMixed" id="rentTypeMixed" class="h-4 w-4 mr-2 cursor-pointer sr-only peer" />
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ms-2 text-gray-900 dark:text-gray-300">Alquiler mixto largo/vacacional</span>
      </label>
    </div>

    <template v-if="cRentTypeMixedSelected">
      <GroupBox title="Mixto - Gastos" class="mt-6">
        <div class="grid grid-cols-1 gap-2">
          ¡Illo illo illo!
        </div>
      </GroupBox>
  
      <GroupBox title="Mixto - Ingresos" class="mt-6">
        <div class="grid grid-cols-1 gap-2">
          ¡Illo illo illo!
        </div>
      </GroupBox>
    </template>


    <div v-if="mRentType.length === 0" class="mt-6 px-2">
      <Alert level="warning" class="my-2">
        Por favor, selecciona al menos un tipo de alquiler.
      </Alert>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  id: { type: String, default: "" },
});

console.log("PropertyForm props:");
console.log(props);

import Alert from "./html/Alert.vue";
import GroupBox from "./html/GroupBox.vue";
import InputText from "./html/InputText.vue";
import InputAmount from "./html/InputTextLocalAmount.vue";

// id

const mAlias = ref("hello");
const mCity = ref("");
const mAddress = ref("");

// anuncio

const mAskingPriceStr = ref("");
const mAskingPrice = ref("");
const mUrl = ref("");
const mUrlPhoto = ref("");

// coste de compra

const mPurchasePrice = ref(100000);
const mPurchaseTaxPerc = ref(7);
const mPurchaseTax = ref(7000);
const mPurchaseNotary = ref(400);
const mPurchaseRegistry = ref(200);
const mPurchaseAgentFee = ref(0);

const cPurchaseTax = computed({
  get: () => mPurchasePrice.value * mPurchaseTaxPerc.value / 100
});

const cPurchaseCosts = computed({
  get: () => cPurchaseTax.value +
             mPurchaseNotary.value +
             mPurchaseRegistry.value +
             mPurchaseAgentFee.value
});

const cPurchaseSubtotal = computed({
  get: () => mPurchasePrice.value + cPurchaseCosts.value
});

const updatePurchaseTaxPerc = (newTaxPerc) => {
  mPurchaseTax.value = mPurchasePrice.value * newTaxPerc / 100;
};

// hipoteca

const mMortgagePerc = ref(0);
const mMortgageAmount = ref(0);
const mMortgageYears = ref(30);
const mMortgageInterest = ref(4);

const cMortgageAmount = computed({
  get: () => mPurchasePrice.value * mMortgagePerc.value / 100
});

const cMortgageMonths = computed({
  get: () => mMortgageYears.value * 12
});

const computeMortgagePayments = (principal, loanTermInYears, annualInterestRate) => {
  const monthlyInterestRate = (annualInterestRate / 100) / 12;
  const numberOfMonthlyPayments = loanTermInYears * 12;
  const monthlyPayment = (
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonthlyPayments))
    ).toFixed(2) / 1;
  const totalPayment = monthlyPayment * numberOfMonthlyPayments;
  const totalInterest = totalPayment - principal;

  return {
    totalPayment: totalPayment.toFixed(2) / 1,
    yearlyPayment: monthlyPayment.toFixed(2) * 12,
    monthlyPayment: monthlyPayment.toFixed(2) / 1,

    totalInterest: totalInterest.toFixed(2) / 1,
    avgYearlyInterest: (totalInterest / loanTermInYears).toFixed(2) / 1,
    avgMonthlyInterest: (totalInterest / numberOfMonthlyPayments).toFixed(2) / 1,

    totalPrincipal: principal.toFixed(2) / 1,
    avgYearlyPrincipal: (principal / loanTermInYears).toFixed(2) / 1,
    avgMonthlyPrincipal: (principal / numberOfMonthlyPayments).toFixed(2) / 1,
  };
};

const cMortgagePayments = computed({
  get: () => computeMortgagePayments(cMortgageAmount.value, mMortgageYears.value, mMortgageInterest.value)
});

const updateMortgagePerc = (newMortgagePerc) => {
  console.log("updateMortgagePerc()");
  console.log("newMortgagePerc:", newMortgagePerc);
  mMortgageAmount.value = mPurchasePrice.value * newMortgagePerc / 100;
};

// gastos hipoteca

const mMortgageNotary = ref(0);
const mMortgageRegistry = ref(0);
const mMortgageTaxes = ref(0);
const mMortgageAppraisal = ref(250);
const mMortgageAdmin = ref(400);
const mMortgageOriginationFee = ref(0);
const mMortgageBrokerFee = ref(0);

const cMortgageCosts = computed({
  get: () => mMortgageNotary.value +
             mMortgageRegistry.value +
             mMortgageTaxes.value +
             mMortgageAppraisal.value +
             mMortgageAdmin.value +
             mMortgageOriginationFee.value +
             mMortgageBrokerFee.value
});

const cPurchaseWithMortgage = computed({
  get: () => cPurchaseSubtotal.value + cMortgageCosts.value
});

const cMortgageCapital = computed({
  get: () => cPurchaseWithMortgage.value - cMortgageAmount.value
});

// gastos reformas

const mRenewal = ref(0);
const mFurniture = ref(0);

const cRenewalCosts = computed({
  get: () => mRenewal.value + mFurniture.value
});

const cPurchaseWithRenewal = computed({
  get: () => cPurchaseWithMortgage.value + cRenewalCosts.value
});

const cDownpayment = computed({
  get: () => cPurchaseWithRenewal.value - cMortgageAmount.value
});

const cTotalCosts = computed({
  get: () => cPurchaseWithRenewal.value - mPurchasePrice.value
});

mPurchasePrice

// gastos recurrentes fijos

const mFixedCostPropertyTax = ref(0);
const mFixedCostServiceFeeMonth = ref(0);
const mFixedCostHomeInsurance = ref(0);
const mFixedCostLifeInsurance = ref(0);
const mFixedCostMaintenance = ref(0);
const mFixedCostOthers = ref(0);

const cFixedCostServiceFeeYear = computed({
  get: () => mFixedCostServiceFeeMonth.value * 12
});

const cFixedCosts = computed({
  get: () => mFixedCostPropertyTax.value +
             cFixedCostServiceFeeYear.value +
             mFixedCostHomeInsurance.value +
             mFixedCostLifeInsurance.value +
             mFixedCostMaintenance.value +
             mFixedCostOthers.value
});

const cFixedCostsMonth = computed({
  get: () => cFixedCosts.value / 12
});

// rent type

const mRentType = ref(["rentTypeLong", "rentTypeShort", "rentTypeMixed"]);

const cRentTypeLongSelected = computed({
  get: () => mRentType.value.indexOf("rentTypeLong") !== -1
});
const cRentTypeShortSelected = computed({
  get: () => mRentType.value.indexOf("rentTypeShort") !== -1
});
const cRentTypeMixedSelected = computed({
  get: () => mRentType.value.indexOf("rentTypeMixed") !== -1
});

//

const showBlur = (inputName, value) => {
  console.log("showBlur()");
  console.log("inputName:", inputName);
  console.log("value:", value);
};

</script>
