/*
 * 封装表单验证方法，支持异步验证
 */
import { notice } from '@/tool/talk'


/*
 * 表单元素验证结果集合合并
 */
export const  resultMerge = async (form, rules) => {
	let results = []
	for (let item in form) {
		results.push(await validate(form, rules, item))
	}
	let flag = true
	for (let item of results) {
		flag = flag && item
	}
	return flag
}


/*
 * 表单验证单个元素
 * params:  form: 表单数据对象, rules： 对应表单规则对象, field: 需要验证的表单字段
 */
export const  validate = async ( form, rules, field) => {
	if (!!rules[field]) {
		for (const item of rules[field]) {
			const tepmResult = await item.check(form[field].value)
			if (!!item && !tepmResult) {
				form[field].errorText = item.message
				return false
			}else {
				form[field].errorText = ''
			}
		}
		return true
	} else{
		return true
	}
}


/*
 * 表单验证单个元素
 * params:  form: 表单数据对象, rules： 对应表单规则对象, field: 需要验证的表单字段
 */
export const  validateAlert = async ( form, rules, field) => {
	if (!!rules[field]) {
		for (const item of rules[field]) {
			const tepmResult = await item.check(form[field].value)
			if (!!item && !tepmResult) {
				notice(item.message)
				return false
			}else {
				form[field].errorText = ''
			}
		}
		return true
	} else{
		return true
	}
}

/*
 * 表单元素验证结果集合合并
 */
export const  resultTraversal = async (form, rules) => {
	for (let item in form) {
		const single =  await validate(form, rules, item)
		if (!single) {
			return single
		}
	}
	return true
}