import { useEffect } from "react";
import { useAuth } from "../context/authContext";

export default function PollPage(){

    const {getPollQuetions} = useAuth();

    useEffect(() => {
        getPollQuetions();
        console.log('funciona maldición!')
    }, [])

    return(
        <div className="mx-auto mt-10 max-w-md flex justify-center p-11 lg:mx-0 md:flex md:max-w-none">
            <fieldset>
                <legend class="text-sm font-semibold leading-6 text-gray-900">
                    Encuesta Compensar
                </legend>
                <p class="mt-1 text-sm leading-6 text-gray-600">
                    abcd
                </p>
                <div  class="mt-6 space-y-6">
                    <div class="flex items-center gap-x-3">
                        <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">opion</label>
                    </div>
                    <div class="flex items-center gap-x-3">
                        <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">opion</label>
                    </div>
                    <div class="flex items-center gap-x-3">
                        <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">opion</label>
                    </div>
                    <div class="flex items-center gap-x-3">
                        <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">opion</label>
                    </div>
                </div>
                <p class="mt-1 text-sm leading-6 text-gray-600">
                    texto de la encuesta? que complejo esta esto
                </p>
                <div  class="mt-6 space-y-6">
                    <div class="flex items-center gap-x-3">
                        <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">opion</label>
                    </div>
                    <div class="flex items-center gap-x-3">
                        <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">opion</label>
                    </div>
                    <div class="flex items-center gap-x-3">
                        <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">opion</label>
                    </div>
                    <div class="flex items-center gap-x-3">
                        <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">opion</label>
                    </div>
                </div>
            </fieldset>
        </div>
    )
}

