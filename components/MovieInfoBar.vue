<script lang="ts" setup>
import { ClockIcon, BanknotesIcon,  CurrencyDollarIcon} from '@heroicons/vue/24/outline'
import { calcTime, convertMoney } from '~/utils/converters'
defineProps<{
  time: number;
  budget: number;
  revenue: number;
}>()
</script>

<template>
		<div class="bg-black">
			<div class="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row justify-center md:space-x-2 p-4">
				<div class="flex border rounded-sm p-2 border-green-500">
					<ClockIcon class="w-[24px] mr-2" />
					<span class="">Running time: {{calcTime(time)}}</span>
				</div>
				<div class="flex border rounded-sm p-2 border-green-500">
					<BanknotesIcon class="w-[24px] mr-2" />
					<span class="">Budget: {{convertMoney(budget)}}</span>
				</div>
				<div class="flex border rounded-sm p-2 border-green-500">
					<CurrencyDollarIcon class="w-[24px] mr-2" />
					<span class="">Revenue: {{convertMoney(revenue)}}</span>
				</div>
			</div>
		</div>
</template>

