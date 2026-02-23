#2026 Updates
    driver.find_element(By.ID, "fillable-field--662ecc06-7d18-4671-a96f-13bf31920e82").send_keys(lotNumber)
    driver.switch_to.active_element.send_keys(Keys.TAB)
    driver.switch_to.active_element.send_keys('Wildwood Terrace')
#Keep this so that it's easy to test entries
# #Start at entries number 1:
entries = 1

#How many rows of data in the sheet/dataframe?
# totalEntries =int(input("How many total entries are there for this run? ONLY ONE AT A TIME. Doesn't work well with just one guest"))

totalEntries = 1

while entries <= totalEntries:

    #Define number of guests (not including primary renter) here:
    #row index starts at ZERO
    
    row = entries
    #start with guestNum=1 for for loop down below
    guestNum = 1
    guestName = df_guests.loc[row,'name']
    maxVehicles = '4'
    driver.find_element(By.ID, "fillable-field--662ecc06-7d18-4671-a96f-13bf31920e82").send_keys(lotNumber)
    driver.switch_to.active_element.send_keys(Keys.TAB)
    arrival = df_guests.loc[row,'guestArrival']
    departure = df_guests.loc[row,'guestDepart']
    numberofnights = df_guests.loc[row,'numberofNights']
    print(f'{guestName} stays from {arrival} until {departure}, for {numberofnights} nights. Save on PDFfiller, username is donovan.hayes@gmail.com and pwd is heyhideout618')
    time.sleep(sleeptime)
    driver.switch_to.active_element.send_keys(lotNumber)
    driver.switch_to.active_element.send_keys(Keys.TAB)
    time.sleep(sleeptime)
    driver.switch_to.active_element.send_keys(streetName + Keys.TAB)
    time.sleep(sleeptime)
    driver.switch_to.active_element.send_keys(emergencySign + Keys.TAB)
    time.sleep(sleeptime)
    driver.switch_to.active_element.send_keys(lastNameLot + Keys.TAB)
    time.sleep(sleeptime)
    driver.switch_to.active_element.send_keys(occupancy + Keys.TAB)
    time.sleep(sleeptime)
    driver.switch_to.active_element.send_keys(maxVehicles + Keys.TAB)
    time.sleep(sleeptime)
    driver.switch_to.active_element.send_keys(df_guests.loc[row,'name'] + Keys.TAB)
    time.sleep(sleeptime)
    driver.switch_to.active_element.send_keys(df_guests.loc[row,'name'] + Keys.TAB)
    time.sleep(sleeptime)
    driver.switch_to.active_element.send_keys(int(df_guests.loc[row,'age']))
    driver.switch_to.active_element.send_keys(Keys.TAB)
    time.sleep(sleeptime)
    driver.switch_to.active_element.send_keys(df_guests.loc[row,'address'] + Keys.TAB)
    time.sleep(sleeptime)
    # driver.switch_to.active_element.send_keys(str((df_guests.loc[row,'license'])))
    # driver.switch_to.active_element.send_keys(Keys.TAB)
    # time.sleep(sleeptime)
    driver.switch_to.active_element.send_keys(int(df_guests.loc[row,'phoneNumber']))
    driver.switch_to.active_element.send_keys(Keys.TAB)
    time.sleep(sleeptime)
    driver.switch_to.active_element.send_keys(df_guests.loc[row,'emailAddress'] + Keys.TAB)
    time.sleep(sleeptime)
    # driver.switch_to.active_element.send_keys(approvedVehicles)
    # driver.switch_to.active_element.send_keys(Keys.TAB)
    # time.sleep(sleeptime)
    # driver.find_element(By.ID, "fillable-field--1-14").click()
    time.sleep(sleeptime)
    #In 2025, the form was updated that made it necessary to process the while loop in sets of 2
    while guestNum < NumofGuests:
        guestNumNext = guestNum + 1
        if guestNumNext == NumofGuests:
            guestNumNext = guestNum
        guestNameCol = f'guest{guestNum}Name'
        guestAgeCol = f'guest{guestNum}Age'
        guestRelationshipCol = f'guest{guestNum}Relationship'
        guestNameNextCol = f'guest{guestNumNext}Name'
        guestAgeNextCol = f'guest{guestNumNext}Age'
        guestRelationshipNextCol = f'guest{guestNumNext}Relationship'
        driver.switch_to.active_element.send_keys(df_guests.loc[row,guestNameCol])
        driver.switch_to.active_element.send_keys(Keys.TAB)
        time.sleep(sleeptime)
#         driver.switch_to.active_element.send_keys(df_guests.loc[row,guestNameNextCol])
#         driver.switch_to.active_element.send_keys(Keys.TAB)
#         time.sleep(sleeptime)
        driver.switch_to.active_element.send_keys(int(df_guests.loc[row,guestAgeCol]))
        driver.switch_to.active_element.send_keys(Keys.TAB)
        time.sleep(sleeptime)
        driver.switch_to.active_element.send_keys(df_guests.loc[row,guestRelationshipCol] + Keys.TAB)
#         driver.switch_to.active_element.send_keys(int(df_guests.loc[row,guestAgeNextCol]))
#         driver.switch_to.active_element.send_keys(Keys.TAB)
        time.sleep(sleeptime)
#         driver.switch_to.active_element.send_keys(df_guests.loc[row,guestRelationshipNextCol] + Keys.TAB)
        time.sleep(sleeptime)
        #Jump up by 1
        guestNum +=1
    # moved here 2.26.24
    # driver.find_element(By.ID, "fillable-field--1-63").click()
    # #driver.find_element(By.ID, "fillable-field--1-63").click()
    # #added these on 2.15.24, might not work- should add dates of arrival and departure
    # time.sleep(sleeptime)
    # driver.find_element(By.ID, "fillable-field--1-56").click()
    driver.switch_to.active_element.send_keys(arrival)
    time.sleep(sleeptime)
    driver.switch_to.active_element.send_keys(Keys.TAB)
    time.sleep(sleeptime)
    driver.switch_to.active_element.send_keys(departure)
    time.sleep(sleeptime)
    print(f'Finished with: {guestNameCol}, {guestAgeCol}, {guestRelationshipCol}')
    time.sleep(sleeptime)
    
    entries+=1
    input("Press enter when you are ready for the next entry.")



all_columns = list(df_guests) # Creates list of all column headers

