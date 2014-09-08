/*
 * get_property_extras_validity()
 *
 * Function for checking whether entries in extra details generated an error
 *
 * @author    Jimmy Mwang'ondi jmwangondi@malikwamali.co.ke
 * @date      2007-01-01
 *
 *
 * Change Record
 *
 * Date        Revision
 * ----------------------------------------------------------------------------
 *
 *
 */
 
function get_property_extras_validity()
{
	// apartment type
	if (document.frm_property_search.cb_property_type.value=="1")
	{
		// apartment type
		if (document.getElementById('id_chb_apartment_type').checked && document.getElementById('id_cb_apartment_type').value=="-1")
		{
			alert("Please select the type of the apartment you are searching for."+'\n'+"Example: Block or Unit.");
			return false;
		}
		
		// block apartments
		else if (document.getElementById('id_chb_apartment_type').checked && document.getElementById('id_cb_apartment_type').value=="1")
		{
			// number of units in block
			if (document.getElementById('id_chb_num_blocks').checked && document.getElementById('id_cb_num_blocks_format').value=="-1")
			{
				alert("Please select the format you want to use to filter out block apartments by number of units."+'\n'+"Example: Between, Greater Than or Less Than.");
				return false;
			}
			else if (document.getElementById('id_chb_num_blocks').checked)
			{
				switch(document.getElementById('id_cb_num_blocks_format').value)
				{
					// between
					case '1':
						// lower value - check for non value
						if (document.getElementById('id_txt_num_blocks_between_lower').value=="")
						{
							alert("Please enter the lower value of number of apartments in block.");
							return false;
						}
						// lower value - check for non number
						else if (isNaN(parseFloat(document.getElementById('id_txt_num_blocks_between_lower').value)))
						{
							alert("Please enter a valid number for the lower value of number of blocks in apartments.");
							return false;
						}
						// lower value - number greater than zero
						else if (parseFloat(document.getElementById('id_txt_num_blocks_between_lower').value) <= 0)
						{
							alert("Please enter a non zero and non-negative number for the lower value of number of blocks.");
							return false;
						}
						// upper value - check for non number
						else if (document.getElementById('id_txt_num_blocks_between_upper').value=="")
						{
							alert("Please enter the upper value of number of apartments in block.");
							return false;
						}
						// upper value - check for non number
						else if (isNaN(parseFloat(document.getElementById('id_txt_num_blocks_between_upper').value)))
						{
							alert("Please enter a valid number for the upper value of number of apartments in block.");
							return false;
						}
						// upper value - check for non number greater than 0
						else if (parseFloat(document.getElementById('id_txt_num_blocks_between_upper').value) <= 0)
						{
							alert("Please enter a non zero and non-negative number for the upper value of number of blocks in apartment.");
							return false;
						}
						
					break;
					
					
					// greater than
					case '2':
						// check for non value
						if (document.getElementById('id_txt_num_blocks_greater_than').value=="")
						{
							alert("Please enter the value of number of apartments in block.");
							return false;
						}
						// check for non number
						else if (isNaN(parseFloat(document.getElementById('id_txt_num_blocks_greater_than').value)))
						{
							alert("Please enter a valid number for the value of number of blocks in apartments.");
							return false;
						}
						// number greater than zero
						else if (parseFloat(document.getElementById('id_txt_num_blocks_greater_than').value) <= 0)
						{
							alert("Please enter a non zero and non-negative number for the value of number of blocks.");
							return false;
						}
						
					break;
					
					
					// less than
					case '3':
						// check for non value
						if (document.getElementById('id_txt_num_blocks_less_than').value=="")
						{
							alert("Please enter the value of number of apartments in block.");
							return false;
						}
						// check for non number
						else if (isNaN(parseFloat(document.getElementById('id_txt_num_blocks_less_than').value)))
						{
							alert("Please enter a valid number for the value of number of blocks in apartments.");
							return false;
						}
						// number greater than zero
						else if (parseFloat(document.getElementById('id_txt_num_blocks_less_than').value) <= 0)
						{
							alert("Please enter a non zero and non-negative number for the value of number of blocks.");
							return false;
						}
						
					break;
					
				} // end switch
			} // end else
		}
		
		// unit apartment
		else if (document.getElementById('id_chb_apartment_type').checked && document.getElementById('id_cb_apartment_type').value=="2")
		{
			// floor unit resides in
			if (document.getElementById('id_chb_floor').checked && document.getElementById('id_cb_floor_format').value=="-1")
			{
				alert("Please select the format you want to use to filter out the floor an apartment lies in."+'\n'+"Example: Between, Greater Than or Less Than.");
				return false;
			}
			else if (document.getElementById('id_chb_floor').checked)
			{
				switch(document.getElementById('id_cb_floor_format').value)
				{
					// between
					case '1':
						// lower value - check for non value
						if (document.getElementById('id_txt_floor_between_lower').value=="")
						{
							alert("Please enter the lower value of floor.");
							return false;
						}
						// lower value - check for non number
						else if (isNaN(parseFloat(document.getElementById('id_txt_floor_between_lower').value)))
						{
							alert("Please enter a valid number for the lower value of floor.");
							return false;
						}
						// upper value - check for non number
						else if (document.getElementById('id_txt_floor_between_upper').value=="")
						{
							alert("Please enter the upper value of floor.");
							return false;
						}
						// upper value - check for non number
						else if (isNaN(parseFloat(document.getElementById('id_txt_floor_between_upper').value)))
						{
							alert("Please enter a valid number for the upper value of floor.");
							return false;
						}

					break;
					
					
					// greater than
					case '2':
						// check for non value
						if (document.getElementById('id_txt_floor_greater_than').value=="")
						{
							alert("Please enter the value of floor.");
							return false;
						}
						// check for non number
						else if (isNaN(parseFloat(document.getElementById('id_txt_floor_greater_than').value)))
						{
							alert("Please enter a valid number for the value of floor.");
							return false;
						}

					break;
					
					
					// less than
					case '3':
						// check for non value
						if (document.getElementById('id_txt_floor_less_than').value=="")
						{
							alert("Please enter the value of floor.");
							return false;
						}
						// check for non number
						else if (isNaN(parseFloat(document.getElementById('id_txt_floor_less_than').value)))
						{
							alert("Please enter a valid number for the value of floor.");
							return false;
						}
						
					break;
					
				} // end switch
			} // end else
		}
		
	}
  
	// bedroom number
	if (document.frm_property_search.cb_property_type.value=="1" || document.frm_property_search.cb_property_type.value=="2" || document.frm_property_search.cb_property_type.value=="3")
	{  
		// number of bedrooms
		if (document.getElementById('id_chb_num_bedrooms').checked && document.getElementById('id_cb_num_bedrooms_format').value=="-1")
		{
			alert("Please select the format you want to use to filter out properties by number of bedrooms."+'\n'+"Example: Between, Greater Than or Less Than.");
			return false;
		}
		else if (document.getElementById('id_chb_num_bedrooms').checked)
		{
			switch(document.getElementById('id_cb_num_bedrooms_format').value)
			{
				// between
				case '1':
					// lower value - check for non value
					if (document.getElementById('id_txt_num_bedrooms_between_lower').value=="")
					{
						alert("Please enter the lower value of number of bedrooms.");
						return false;
					}
					// lower value - check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_num_bedrooms_between_lower').value)))
					{
						alert("Please enter a valid number for the lower value of number of bedrooms.");
						return false;
					}
					// lower value - number greater than zero
					else if (parseFloat(document.getElementById('id_txt_num_bedrooms_between_lower').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the lower value of bedrooms.");
						return false;
					}
					// upper value - check for non number
					else if (document.getElementById('id_txt_num_bedrooms_between_upper').value=="")
					{
						alert("Please enter the upper value of number of bedrooms.");
						return false;
					}
					// upper value - check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_num_bedrooms_between_upper').value)))
					{
						alert("Please enter a valid number for the upper value of number of bedrooms.");
						return false;
					}
					// upper value - check for non number greater than 0
					else if (parseFloat(document.getElementById('id_txt_num_bedrooms_between_upper').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the upper value of number of bedrooms.");
						return false;
					}
					
				break;
				
				
				// greater than
				case '2':
					// check for non value
					if (document.getElementById('id_txt_num_bedrooms_greater_than').value=="")
					{
						alert("Please enter the value of number of bedrooms.");
						return false;
					}
					// check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_num_bedrooms_greater_than').value)))
					{
						alert("Please enter a valid number for the value of number of bedrooms.");
						return false;
					}
					// number greater than zero
					else if (parseFloat(document.getElementById('id_txt_num_bedrooms_greater_than').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the value of bedrooms.");
						return false;
					}
					
				break;
				
				
				// less than
				case '3':
					// check for non value
					if (document.getElementById('id_txt_num_bedrooms_less_than').value=="")
					{
						alert("Please enter the value of number of bedrooms.");
						return false;
					}
					// check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_num_bedrooms_less_than').value)))
					{
						alert("Please enter a valid number for the value of number of bedrooms.");
						return false;
					}
					// number greater than zero
					else if (parseFloat(document.getElementById('id_txt_num_bedrooms_less_than').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the value of bedrooms.");
						return false;
					}
					
				break;
				
			} // end switch
		} // end else
		
		// number of bedrooms ensuite
		if (document.getElementById('id_chb_num_bedrooms_ensuite').checked && document.getElementById('id_cb_num_bedrooms_ensuite_format').value=="-1")
		{
			alert("Please select the format you want to use to filter out properties by number of bedrooms ensuite."+'\n'+"Example: Between, Greater Than or Less Than.");
			return false;
		}
		else if (document.getElementById('id_chb_num_bedrooms_ensuite').checked)
		{
			switch(document.getElementById('id_cb_num_bedrooms_ensuite_format').value)
			{
				// between
				case '1':
					// lower value - check for non value
					if (document.getElementById('id_txt_num_bedrooms_ensuite_between_lower').value=="")
					{
						alert("Please enter the lower value of number of bedrooms ensuite.");
						return false;
					}
					// lower value - check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_num_bedrooms_ensuite_between_lower').value)))
					{
						alert("Please enter a valid number for the lower value of number of bedrooms ensuite.");
						return false;
					}
					// lower value - number greater than zero
					else if (parseFloat(document.getElementById('id_txt_num_bedrooms_ensuite_between_lower').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the lower value of bedrooms ensuite.");
						return false;
					}
					// upper value - check for non number
					else if (document.getElementById('id_txt_num_bedrooms_ensuite_between_upper').value=="")
					{
						alert("Please enter the upper value of number of bedrooms ensuite.");
						return false;
					}
					// upper value - check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_num_bedrooms_ensuite_between_upper').value)))
					{
						alert("Please enter a valid number for the upper value of number of bedrooms ensuite.");
						return false;
					}
					// upper value - check for non number greater than 0
					else if (parseFloat(document.getElementById('id_txt_num_bedrooms_ensuite_between_upper').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the upper value of number of bedrooms ensuite.");
						return false;
					}
					
				break;
				
				
				// greater than
				case '2':
					// check for non value
					if (document.getElementById('id_txt_num_bedrooms_ensuite_greater_than').value=="")
					{
						alert("Please enter the value of number of bedrooms ensuite.");
						return false;
					}
					// check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_num_bedrooms_ensuite_greater_than').value)))
					{
						alert("Please enter a valid number for the value of number of bedrooms ensuite.");
						return false;
					}
					// number greater than zero
					else if (parseFloat(document.getElementById('id_txt_num_bedrooms_ensuite_greater_than').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the value of bedrooms ensuite.");
						return false;
					}
					
				break;
				
				
				// less than
				case '3':
					// check for non value
					if (document.getElementById('id_txt_num_bedrooms_ensuite_less_than').value=="")
					{
						alert("Please enter the value of number of bedrooms ensuite.");
						return false;
					}
					// check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_num_bedrooms_ensuite_less_than').value)))
					{
						alert("Please enter a valid number for the value of number of bedrooms ensuite.");
						return false;
					}
					// number greater than zero
					else if (parseFloat(document.getElementById('id_txt_num_bedrooms_ensuite_less_than').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the value of bedrooms ensuite.");
						return false;
					}
					
				break;
				
			} // end switch
		} // end else
	}

	// privacy type
	if (document.frm_property_search.cb_property_type.value=="2" || document.frm_property_search.cb_property_type.value=="3" || document.frm_property_search.cb_property_type.value=="4" || document.frm_property_search.cb_property_type.value=="5")
	{
		if (document.getElementById('id_chb_privacy_type').checked && !validate_radio_group(document.frm_property_search.rgb_private_estate_type))
		{
			alert("Please select the type of compound of the property you are posting."+'\n'+"Example: private, estate e.t.c."); 
			return false;
		}		
	}
  
	// land size
	if (document.frm_property_search.cb_property_type.value=="2" || document.frm_property_search.cb_property_type.value=="3" || document.frm_property_search.cb_property_type.value=="5")
	{  
		// size of land
		if (document.getElementById('id_chb_land_size').checked && document.getElementById('id_cb_land_size_format').value=="-1")
		{
			alert("Please select the format you want to use to filter out properties by size of land they occupy."+'\n'+"Example: Between, Greater Than or Less Than.");
			return false;
		}
		else if (document.getElementById('id_chb_land_size').checked)
		{
			switch(document.getElementById('id_cb_land_size_format').value)
			{
				// between
				case '1':
					// lower value - check for non value
					if (document.getElementById('id_txt_land_size_between_lower').value=="")
					{
						alert("Please enter the lower value of size of land.");
						return false;
					}
					// lower value - check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_land_size_between_lower').value)))
					{
						alert("Please enter a valid number for the lower value of size of land.");
						return false;
					}
					// lower value - number greater than zero
					else if (parseFloat(document.getElementById('id_txt_land_size_between_lower').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the lower value of size of land.");
						return false;
					}
					// upper value - check for non number
					else if (document.getElementById('id_txt_land_size_between_upper').value=="")
					{
						alert("Please enter the upper value of size of land.");
						return false;
					}
					// upper value - check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_land_size_between_upper').value)))
					{
						alert("Please enter a valid number for the upper value of size of land.");
						return false;
					}
					// upper value - check for non number greater than 0
					else if (parseFloat(document.getElementById('id_txt_land_size_between_upper').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the upper value of size of land.");
						return false;
					}
					
				break;
				
				
				// greater than
				case '2':
					// check for non value
					if (document.getElementById('id_txt_land_size_between_greater_than').value=="")
					{
						alert("Please enter the value of size of land.");
						return false;
					}
					// check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_land_size_between_greater_than').value)))
					{
						alert("Please enter a valid number for the value of size of land.");
						return false;
					}
					// number greater than zero
					else if (parseFloat(document.getElementById('id_txt_land_size_between_greater_than').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the value of size of land.");
						return false;
					}
					
				break;
				
				
				// less than
				case '3':
					// check for non value
					if (document.getElementById('id_txt_land_size_between_less_than').value=="")
					{
						alert("Please enter the value of size of land.");
						return false;
					}
					// check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_land_size_between_less_than').value)))
					{
						alert("Please enter a valid number for the value of size of land.");
						return false;
					}
					// number greater than zero
					else if (parseFloat(document.getElementById('id_txt_land_size_between_less_than').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the value of size of land.");
						return false;
					}
					
				break;
				
			} // end switch
		} // end else	
	}

	// Number of Storeys
	if (document.frm_property_search.cb_property_type.value=="2" || document.frm_property_search.cb_property_type.value=="6")
	{  
		// number of storeys
		if (document.getElementById('id_chb_num_storeys').checked && document.getElementById('id_cb_num_storeys_format').value=="-1")
		{
			alert("Please select the format you want to use to filter out properties by number of storeys they have."+'\n'+"Example: Between, Greater Than or Less Than.");
			return false;
		}
		else if (document.getElementById('id_chb_num_storeys').checked)
		{
			switch(document.getElementById('id_cb_num_storeys_format').value)
			{

				// between
				case '1':
					// lower value - check for non value
					if (document.getElementById('id_txt_num_storeys_between_lower').value=="")
					{
						alert("Please enter the lower value of number of storeys.");
						return false;
					}
					// lower value - check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_num_storeys_between_lower').value)))
					{
						alert("Please enter a valid number for the lower value of number of storeys.");
						return false;
					}
					// lower value - number greater than zero
					else if (parseFloat(document.getElementById('id_txt_num_storeys_between_lower').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the lower value of number of storeys.");
						return false;
					}
					// upper value - check for non number
					else if (document.getElementById('id_txt_num_storeys_between_upper').value=="")
					{
						alert("Please enter the upper value of number of storeys.");
						return false;
					}
					// upper value - check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_num_storeys_between_upper').value)))
					{
						alert("Please enter a valid number for the upper value of number of storeys.");
						return false;
					}
					// upper value - check for non number greater than 0
					else if (parseFloat(document.getElementById('id_txt_num_storeys_between_upper').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the upper value of number of storeys.");
						return false;
					}
					
				break;
				
				
				// greater than
				case '2':
					// check for non value
					if (document.getElementById('id_txt_num_storeys_between_greater_than').value=="")
					{
						alert("Please enter the value of number of storeys.");
						return false;
					}
					// check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_num_storeys_between_greater_than').value)))
					{
						alert("Please enter a valid number for the value of number of storeys.");
						return false;
					}
					// number greater than zero
					else if (parseFloat(document.getElementById('id_txt_num_storeys_between_greater_than').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the value of number of storeys.");
						return false;
					}
					
				break;
				
				
				// less than
				case '3':
					// check for non value
					if (document.getElementById('id_txt_num_storeys_between_less_than').value=="")
					{
						alert("Please enter the value of number of storeys.");
						return false;
					}
					// check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_num_storeys_between_less_than').value)))
					{
						alert("Please enter a valid number for the value of number of storeys.");
						return false;
					}
					// number greater than zero
					else if (parseFloat(document.getElementById('id_txt_num_storeys_between_less_than').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the value of number of storeyss.");
						return false;
					}
					
				break;
				
			} // end switch
		} // end else	
	}

	// floor size
	if ((document.frm_property_search.cb_property_type.value=="4" || document.frm_property_search.cb_property_type.value=="7") || document.frm_property_search.cb_property_type.value=="10")
	{  
		// floor size
		if (document.getElementById('id_chb_floor_size').checked && document.getElementById('id_cb_floor_size_format').value=="-1")
		{
			alert("Please select the format you want to use to filter out properties by size of floor space they occupy."+'\n'+"Example: Between, Greater Than or Less Than.");
			return false;
		}
		else if (document.getElementById('id_chb_floor_size').checked)
		{
			switch(document.getElementById('id_cb_floor_size_format').value)
			{
				// between
				case '1':
					// lower value - check for non value
					if (document.getElementById('id_txt_floor_size_between_lower').value=="")
					{
						alert("Please enter the lower value of size of floor space.");
						return false;
					}
					// lower value - check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_floor_size_between_lower').value)))
					{
						alert("Please enter a valid number for the lower value of size of floor space.");
						return false;
					}
					// lower value - number greater than zero
					else if (parseFloat(document.getElementById('id_txt_floor_size_between_lower').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the lower value of size of floor space.");
						return false;
					}
					// upper value - check for non number
					else if (document.getElementById('id_txt_floor_size_between_upper').value=="")
					{
						alert("Please enter the upper value of size of floor space.");
						return false;
					}
					// upper value - check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_floor_size_between_upper').value)))
					{
						alert("Please enter a valid number for the upper value of size of floor space.");
						return false;
					}
					// upper value - check for non number greater than 0
					else if (parseFloat(document.getElementById('id_txt_floor_size_between_upper').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the upper value of size of floor space.");
						return false;
					}
					
				break;
				
				
				// greater than
				case '2':
					// check for non value
					if (document.getElementById('id_txt_floor_size_between_greater_than').value=="")
					{
						alert("Please enter the value of size of floor space.");
						return false;
					}
					// check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_floor_size_between_greater_than').value)))
					{
						alert("Please enter a valid number for the value of size of floor space.");
						return false;
					}
					// number greater than zero
					else if (parseFloat(document.getElementById('id_txt_floor_size_between_greater_than').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the value of size of floor space.");
						return false;
					}
					
				break;
				
				
				// less than
				case '3':
					// check for non value
					if (document.getElementById('id_txt_floor_size_between_less_than').value=="")
					{
						alert("Please enter the value of size of floor space.");
						return false;
					}
					// check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_floor_size_between_less_than').value)))
					{
						alert("Please enter a valid number for the value of size of floor space.");
						return false;
					}
					// number greater than zero
					else if (parseFloat(document.getElementById('id_txt_floor_size_between_less_than').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the value of size of floor space.");
						return false;
					}
					
				break;
				
			} // end switch
		} // end else		
	}

	// terrain type, land details
	if (document.frm_property_search.cb_property_type.value=="5")
	{  
	    // terrain type
		if (document.getElementById('id_chb_terrain_type').checked && document.getElementById('id_cb_terrain_type').value=="")
		{
			alert("Please enter the type of terrain exhibited by the property you are searching for."+'\n'+"Example: rugged, smooth e.t.c."); 
			return false; 
		}

		// land use
		if (document.getElementById('id_chb_land_use').checked && document.getElementById('id_cb_land_use_type').value=="")
		{  
			alert("Please enter the land use suited for the property you are searching for."+'\n'+"Example: agricultural, residential e.t.c."); 
			return false; 
		}  
	}

  
	// floor no
	if (document.frm_property_search.cb_property_type.value=="7")
	{
		// floor unit resides in
		if (document.getElementById('id_chb_floor').checked && document.getElementById('id_cb_floor_format').value=="-1")
		{
			alert("Please select the format you want to use to filter out the floor the properties lie in."+'\n'+"Example: Between, Greater Than or Less Than.");
			return false;
		}
		else if (document.getElementById('id_chb_floor').checked)
		{
			switch(document.getElementById('id_cb_floor_format').value)
			{
				// between
				case '1':
					// lower value - check for non value
					if (document.getElementById('id_txt_floor_between_lower').value=="")
					{
						alert("Please enter the lower value of floor.");
						return false;
					}
					// lower value - check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_floor_between_lower').value)))
					{
						alert("Please enter a valid number for the lower value of floor.");
						return false;
					}
					// upper value - check for non number
					else if (document.getElementById('id_txt_floor_between_upper').value=="")
					{
						alert("Please enter the upper value of floor.");
						return false;
					}
					// upper value - check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_floor_between_upper').value)))
					{
						alert("Please enter a valid number for the upper value of floor.");
						return false;
					}

				break;
				
				
				// greater than
				case '2':
					// check for non value
					if (document.getElementById('id_txt_floor_greater_than').value=="")
					{
						alert("Please enter the value of floor.");
						return false;
					}
					// check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_floor_greater_than').value)))
					{
						alert("Please enter a valid number for the value of floor.");
						return false;
					}

				break;
				
				
				// less than
				case '3':
					// check for non value
					if (document.getElementById('id_txt_floor_less_than').value=="")
					{
						alert("Please enter the value of floor.");
						return false;
					}
					// check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_floor_less_than').value)))
					{
						alert("Please enter a valid number for the value of floor.");
						return false;
					}
					
				break;
				
			} // end switch
		} // end else
	}
}


/*
 * reset_form()
 *
 * Function for reseting form to original valeus
 *
 * @author    Jimmy Mwang'ondi jmwangondi@malikwamali.co.ke
 * @date      2007-01-01
 *
 * Change Record
 *
 * Date        Revision
 * ----------------------------------------------------------------------------
 *
 *
 */
 
function reset_form()
{
	// clear geographical regions	
	document.frm_property_search.chb_geographical_locations.checked = false;
	document.getElementById('div_geographical_elements').style.display = 'none';
	
	// clear extra preferences
	document.frm_property_search.cb_property_type.value="-1";
	set_property_type_preferences();
	
	// set offer type to nothing
	document.frm_property_search.cb_offer_type.value="-1";
	set_offer_type_details();

	// set offer type to nothing
	document.frm_property_search.chb_special_features.checked = false;
	set_special_feature_details();
}

/*
 * validate_data()
 *
 * Verify that all checked elements have a corresponding value
 *
 * @author    Jimmy Mwang'ondi jmwangondi@malikwamali.co.ke
 * @date      2007-01-01
 *
 *
 * Change Record
 *
 * Date        Revision
 * ----------------------------------------------------------------------------
 *
 *
 */ 

function validate_data()
{
	
	if (document.frm_property_search.chb_geographical_locations.checked)
	{
		if (!validate_radio_group(document.frm_property_search.geographical_location))
		{
			alert("Please select the location of the properties you are looking for.");
			return false;
		}
	}
				
	// property type
	if (document.frm_property_search.chb_property_type.checked && document.frm_property_search.cb_property_type.value=="-1")
	{
		alert("Please select the type of properties you are looking for."+'\n'+"Example: Apartments, Land, Office Spaces e.t.c.");
		return false;
	}
	
	else if (document.frm_property_search.cb_property_type.value!="-1")
	{
		if (get_property_extras_validity()==false)
		{
			return false;
		}
	}
				
	// offer type
	if (document.frm_property_search.chb_offer_type.checked && document.frm_property_search.cb_offer_type.value=="-1")
	{
		alert("Please select the offer type of the properties you are searching for."+'\n'+"Example: Rental or Sale");
		return false;
	}
	else if (document.frm_property_search.chb_offer_type.checked)
	{
		// lease type
		if (document.getElementById('id_chb_lease_type').checked && document.getElementById('id_cb_lease_type').value=="-1")
		{
			alert("Please select the lease type of the property you are searching for."+'\n'+"Example: Freehold or Leasehold.");
			return false;
		}
				  
		// offer price
		if (document.getElementById('id_chb_offer_price').checked && document.getElementById('id_cb_offer_price_format').value=="-1")
		{
			alert("Please select the format you want to use to filter out properties by price."+'\n'+"Example: Between, Greater Than or Less Than.");
			return false;
		}
		else 
		{
		 	switch(document.getElementById('id_cb_offer_price_format').value)
			{
				// between
				case '1':
					// lower value - check for non value
					if (document.getElementById('id_txt_offer_price_between_lower').value=="")
					{
						alert("Please enter the lower value of offer price.");
						return false;
					}
					// lower value - check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_offer_price_between_lower').value)))
					{
						alert("Please enter a valid number for the lower value of offer price.");
						return false;
					}
					// lower value - number greater than zero
					else if (parseFloat(document.getElementById('id_txt_offer_price_between_lower').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the lower value of offer price.");
						return false;
					}
					// upper value - check for non number
					else if (document.getElementById('id_txt_offer_price_between_upper').value=="")
					{
						alert("Please enter the upper value of offer price.");
						return false;
					}
					// upper value - check for non number
					else if (isNaN(parseFloat(document.getElementById('id_txt_offer_price_between_upper').value)))
					{
						alert("Please enter a valid number for the upper value of offer price.");
						return false;
					}
					// upper value - check for non number greater than 0
					else if (parseFloat(document.getElementById('id_txt_offer_price_between_upper').value) <= 0)
					{
						alert("Please enter a non zero and non-negative number for the upper value of offer price.");
						return false;
					}
				break;
			} // end switch
		} // end else
	}// end else
}// end function


/*
 * validate_radio_group()
 *
 * Verify that at least a radio button has been checked
 *
 * @author    Jimmy Mwang'ondi jmwangondi@malikwamali.co.ke
 * @date      2007-01-01
 *
 *
 * Change Record
 *
 * Date        Revision
 * ----------------------------------------------------------------------------
 *
 *
 */ 

function validate_radio_group(radio_group)  
{ 
	var b_checked = false; 

	for (var i_counter=0; i_counter<radio_group.length; i_counter++)  
	{
		if (radio_group[i_counter].type=="radio")
		{
			if (radio_group[i_counter].checked) 
			{  
				b_checked = true; 
				break;  
			}
		}  
   	} 
   
	return b_checked; 
}
