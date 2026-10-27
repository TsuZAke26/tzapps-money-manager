import { supabase } from '@/lib/supabase/clients';

export const fetchAll = async () => {
	const { data, error } = await supabase
		.schema('accounts')
		.from('accounts')
		.select();

	if (error) {
		throw error;
	}

	return data;
};
